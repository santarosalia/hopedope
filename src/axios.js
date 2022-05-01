const axios = require("axios");
const databaseId = "8195f0adae7846648cb263d59b1c222b";
const token = "Bearer secret_SSm0GTsFvR3oeHvxj7ODvHYIoXNRk7Sd6cO0MsMMVs9";
const addComment = async (name, comment, pw) => {
  var data = JSON.stringify({
    parent: {
      database_id: databaseId,
    },
    properties: {
      title: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      comment: {
        rich_text: [
          {
            text: {
              content: comment,
            },
          },
        ],
      },
      pw: {
        rich_text: [
          {
            text: {
              content: pw,
            },
          },
        ],
      },
      timestamp: {
        number: new Date().getTime(),
      },
    },
  });

  const config = {
    method: "post",
    url: "https://hdsx.herokuapp.com/https://api.notion.com/v1/pages/",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      "Notion-Version": "2022-02-22",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      //   console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const allMsg = async () => {
  const options = {
    method: "POST",
    url:
      "https://hdsx.herokuapp.com/https://api.notion.com/v1/databases/" +
      databaseId +
      "/query",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      Authorization: token,
    },
    data: { page_size: 100 },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { addComment, allMsg };
