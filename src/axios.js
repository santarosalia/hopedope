var axios = require('axios');

const addComment =()=>{
var data = JSON.stringify({
  "parent": {
    "database_id": "8195f0adae7846648cb263d59b1c222b"
  },
  "properties": {
    "title": {
      "title": [
        {
          "text": {
            "content": "test"
          }
        }
      ]
    }
  }
});

var config = {
  method: 'post',
  url: 'https://api.notion.com/v1/pages/',
  headers: { 
    'Authorization': 'Bearer secret_SSm0GTsFvR3oeHvxj7ODvHYIoXNRk7Sd6cO0MsMMVs9', 
    'Content-Type': 'application/json', 
    'Notion-Version': '2022-02-22'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}

export {addComment};
