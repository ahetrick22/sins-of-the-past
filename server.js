const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/hello', (req, res) => {
  request(
  "https://api.case.law/v1/cases/?search=piracy&decision_date_min=1800-01-01&decision_date_max=1850-01-01",
  { json: true },
  (err, resp, body) => {
    if (err) {
      console.log(err);
    }
     res.send(body);
  }
  );});

app.post('/api/world', (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  console.log('parsed data', data);
  res.send(
    `Received POST request. This is what you sent me: ${JSON.stringify(data)}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
