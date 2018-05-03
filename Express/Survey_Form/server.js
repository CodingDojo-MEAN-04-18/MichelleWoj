const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(request, response) {
  response.render('index');
});

app.post('/results', function(request, response) {
  response.render('results', { name: request.body.name, location: request.body.location,language:request.body.language, comment: request.body.commment });
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
