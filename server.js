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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//receive a post request from the front end
app.post('/casesearch', (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));

  //build the query string with params
  const urlQueryString = querystring.stringify(req.body);

  //make the request with the correct params and send back the response to the front end
  request('https://api.case.law/v1/cases/?' + urlQueryString,
  { json: true },
  (err, resp, body) => {
    if (err) {
      console.log(err);
    }
     res.send(body);
  })

});

//let us know when the server is running
app.listen(port, () => console.log(`Listening on port ${port}`));
