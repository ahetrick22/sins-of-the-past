var express = require('express');
var app = express();
var request = require('request');

/* GET users listing. */
app.get('/', function(req, res) {

  request(
  "https://api.case.law/v1/cases/?search=piracy&decision_date_min=1800-01-01&decision_date_max=1850-01-01",
  { json: true },
  (err, resp, body) => {
    if (err) {
      console.log(err);
    }
     res.send(body);
  }
);
});

module.exports = app;
