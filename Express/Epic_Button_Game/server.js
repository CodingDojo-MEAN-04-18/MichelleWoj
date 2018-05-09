const express = require ('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

const server = app.listen(port, () => console.log(`listening on port ${ port }`));
const io = require('socket.io')(server);

//count will be shared by all child scopes
let count = 0;
io.on('connection', socket => {

  console.log('incoming socket connection');
//listen on server for the event below
  socket.on('buttonClicked', function() {
    //the ++count will occur before the method below is called.
    //io.emit broadcasts to everyone
    //io.emit('numberUpdated', ++count );
    numberUpdated(++count);
  });

//listen for reset on server side
  socket.on('reset', function() {
    //count = 0;
    //io.emit('numberUpdated',count )
    numberUpdated(count=0);
  });
//just give back to current user?
  socket.emit('numberUpdated', count);

});

function numberUpdated(number) {
  io.emit('numberUpdated', number);
};
