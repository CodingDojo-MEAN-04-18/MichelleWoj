const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'), 
    path = require('path'),
    port = 8000, 
    app = express();

//set up boy-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false}));

//set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quotes');

//listening for connection
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

const { Schema } = mongoose;
//=const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote: String, 
    name: String,
});
//collection => quotes
//mongoose.model('Quote', quoteSchema);
//const Quote = mongoose.model('Quote');
const Quote = mongoose.model('quotes', quoteSchema);

//point server to views
app.set('views', path.join(__dirname, 'views'));

//use ejs as our view engine
app.set('view engine', 'ejs');

//List out the routes
app.get('/',function(req,res) {
    res.render('welcome');
});
app.get('/quotes',function(req,res) {
    //logic to get quotes and pass into the rendered view
    Quote.find({}, function(err,quotes) {
        if (err) {console.log(err);}
        res.render('quotes', {quotes: quotes});
    });
});
app.post('/quotes',function(req,res) {
    Quote.create(req.body, function(err) {
        if (err) {console.log(err);}
        res.redirect('/quotes');
    });
});
//end of routing
app.listen(port);



