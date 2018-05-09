const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'views')));

const bodyParser = require('body-parser');

const server = app.listen(port, () => console.log(`listening on port ${ port }`));
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('incoming socket connection');
})




//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'static')));

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//const server = app.listen(port, () => console.log(`listening on port ${ port }`));
//const io = require('socket.io')(server);

//var route = require('./routes/index.js')(app, server);
