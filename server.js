const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const querystring = require('querystring');

//initialize app on port 5000
const app = express();
const port = process.env.PORT || 5000;

//use body parser so we can do a post request
app.use(bodyParser.json());

//allow CORS through...for some reason that makes it work
app.use(function(req, res, next) {
  console.log(res);
  next();
});

//receive a post request from the front end
app.post('/casesearch', (req, res) => {


  const data = JSON.parse(JSON.stringify(req.body));

  //build the query string with params
  const urlQueryString = querystring.stringify(req.body);

const options = {
  url: "https://api.case.law/v1/cases/?" + urlQueryString,
  headers: {
    "Authorization": "token 0dba1d27330ab89d9ccb880e56d24ec16f3804c7"
  },
  json: true
};

//extra key: 0dba1d27330ab89d9ccb880e56d24ec16f3804c7

  //make the request with the correct params and send back the response to the front end
  request(options,
  (err, resp, body) => {
    if (err) {
      console.log(err);
    }
     res.send(body);
  })

});

//let us know when the server is running
app.listen(port, () => console.log(`Listening on port ${port}`));
