const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')

//link to the routes folder
const indexRouter = require('./routes/indexRouter');
const weatherRouter = require('./routes/weatherRouter');
const errRouter = require('./routes/errRouter');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//set app.use for each router
app.use('/', indexRouter);
app.use('/weather', weatherRouter);
app.use('*', errRouter)

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})