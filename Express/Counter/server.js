const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialised: true,
  resave: false,
  name: 'session',
  secret: 'fhdsj'
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('assets')));
app.use(session(sessionConfig));

app.get('/', function(request, response) {
  response.render('index', {counter: addOneToCounter(request) });
});

app.post('/process', function(request, response) {
  response.render('results', { name: request.body.name });
});

function addOneToCounter(request) {
  return request.session.counter = request.session.counter ?
  request.session.counter + 1 : 1;
};

app.listen(port, () => console.log(`Express server listening on port ${port}`));
