const token = process.env.TOKEN;

const Bot = require("node-telegram-bot-api");

const request = require("request");
const { poll } = require("./poll");

let bot;

if (process.env.NODE_ENV === "production") {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Bot(token, { polling: true });
}

console.log("Bot server started in the " + process.env.NODE_ENV + " mode");

bot.on("message", async (msg) => {
  console.log(msg.from.first_name + "의 메세지 :" + msg.text);

  const name = msg.from.first_name;
  if (msg.text == "id") {
    console.log(msg.chat.id);
  }
  if (msg.text == "전체보기") {
    bot
      .sendMessage(msg.chat.id, "전체목록입니다", {
        reply_markup: {
          keyboard: [["BTC-???", "BTC-KRW"]],
        },
      })
      .then();
  }
});

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "안녕하세요 " +
      msg.chat.first_name +
      "님 dope 봇입니다🥳\n/help 를 통해 사용법을 알려드릴게요!"
  );
});
bot.onText(/\/help/, async (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "/mymarket : 구독중인 마켓 확인\n/list : 마켓 리스트 확인하기\n/add 마켓 : 구독할 마켓 등록\n/del 마켓 : 등록 된 마켓 삭제\n/warning : 유의종목 확인"
  );
});

bot.onText(/\/list/, async (msg) => {
  const chatId = msg.chat.id;
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const info = JSON.parse(body);
    let list = "";
    for (i in info) {
      const market = info[i].market;
      const korean_name = info[i].korean_name;
      if (market.includes("KRW")) {
        list += market + " " + korean_name + "\n";
      }
    }

    bot.sendMessage(chatId, "등록가능한 마켓리스트입니다.\n" + list);
  });
});

bot.onText(/\/warning/, async (msg) => {
  const chatId = msg.chat.id;
  let warningList = "유의종목입니다.\n";

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const info = JSON.parse(body);
    for (i in info) {
      if (
        info[i].market_warning == "CAUTION" &&
        info[i].market.includes("KRW")
      ) {
        const korean_name = info[i].korean_name;
        warningList += korean_name + "\n";
      }
    }

    bot.sendMessage(chatId, warningList);
  });
});

bot.onText(/^\/add\sKRW-\w+/, async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const market = text.split(" ")[1];
  let korean_name;
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const info = JSON.parse(body);

    for (i in info) {
      const marketRes = info[i].market;

      if (marketRes == market) {
        korean_name = info[i].korean_name;
        return korean_name;
      }
    }

    return korean_name;
  });

  checkMarket(chatId.toString(), market).then((results) => {
    if (results.result.length > 0) {
      bot.sendMessage(chatId, "이미 등록된 마켓입니다.");
    } else {
      addMarket(chatId.toString(), market);
      bot.sendMessage(chatId, "등록 완료");
    }
  });
});

bot.onText(/\/mymarket/, async (msg) => {
  const chatId = msg.chat.id;
  await myMarket(chatId.toString()).then((result) => {
    result.map((item) => {
      bot.sendMessage(chatId, item.market);
    });
  });
});
bot.onText(/^\/del\sKRW-\w+/, async (msg) => {
  const chatId = msg.chat.id;
  const market = msg.text.split(" ")[1];

  checkMarket(chatId.toString(), market).then((results) => {
    if (results.result.length > 0) {
      results.result.map((page) => {
        delMarket(page.id);
        bot.sendMessage(chatId, "삭제완료");
      });
    } else {
      bot.sendMessage(chatId, "등록되지 않은 마켓입니다.");
    }
  });
});
bot.onText(/\/del/, async (msg) => {
  bot
    .sendMessage(msg.chat.id, "삭제할 마켓을 눌러주세요", {
      reply_markup: {
        keyboard: [["BTC-???", "BTC-KRW"]],
      },
    })
    .then();
});

const options = {
  method: "GET",
  url: "https://api.upbit.com/v1/market/all?isDetails=true",
  headers: { Accept: "application/json" },
};

const options2 = {
  method: "GET",
  url: "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=5",
  headers: { Accept: "application/json" },
};

const setList = async () => {
  const result = await allPage().then(async (items) => {
    let list = [];

    const result = items.results.map(async (item) => {
      const properties = await JSON.parse(JSON.stringify(item.properties));

      const chatId = await properties.chatId.title[0].text.content;
      const market = await properties.market.rich_text[0].text.content;
      list.push(market);
      list.push(chatId);

      return list;
    });
    return result;
  });
  return result;
};

poll(() => {
  const result = setList();

  result.then((prom) => {
    if (prom[0] != undefined) {
      prom[0].then((list) => {
        console.log("등록된 마켓 수 : " + list.length / 2);

        for (let i = 0; i < list.length; i++) {
          if (i % 2 != 0) {
            continue;
          }

          const market = list[i];
          const chatId = list[i + 1];
          const options3 = {
            method: "GET",
            url:
              "https://api.upbit.com/v1/candles/minutes/1?market=" +
              market +
              "&count=5",
            headers: { Accept: "application/json" },
          };

          request(options3, function (error, response, body) {
            if (error) throw new Error(error);
            const info = JSON.parse(body);

            const tradePrice1 = info[0].trade_price;
            const tradePrice5 = info[4].trade_price;
            const timePast = info[4].candle_date_time_kst;
            const onePer = tradePrice5 / 100;
            const result = tradePrice1 - tradePrice5;

            const tp1 = parseInt(tradePrice1).toLocaleString();
            const tp5 = parseInt(tradePrice5).toLocaleString();
            const rs = parseInt(result).toLocaleString();
            const per2 = parseFloat((result / tradePrice5) * 100).toFixed(2);
            if (tradePrice5 - tradePrice1 >= onePer) {
              bot
                .sendMessage(
                  chatId,
                  timePast.split("T")[1] +
                    " 기준" +
                    "\n" +
                    market +
                    "의 가격 : " +
                    tp5 +
                    "원 => " +
                    tp1 +
                    "원\n" +
                    per2 +
                    "% 하락 : " +
                    rs +
                    "원"
                )
                .then();
            } else if (tradePrice1 - tradePrice5 >= onePer) {
              bot
                .sendMessage(
                  chatId,
                  timePast.split("T")[1] +
                    " 기준" +
                    "\n" +
                    market +
                    "의 가격 : " +
                    tp5 +
                    "원 => " +
                    tp1 +
                    "원\n" +
                    per2 +
                    "% 상승 : " +
                    rs +
                    "원"
                )
                .then();
            }
          });
        }
      });
    } else {
      console.log("등록된 마켓 없음");
    }
  });
}, 60000);

module.exports = bot;
