const fs = require('fs');
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const config = require('./config.json')

const app = express();

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', handlebars.engine({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views/partials'),
  layoutsDir: path.join(__dirname, 'views/layouts'),
  extname: '.hbs',
}))

app.use(express.static(path.join(__dirname, 'static')))

app.use('/fontawesome', express.static(
  path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')
))

app.render('index', {title: config.index.title}, function(err, html) {
    console.log('> index', html.length)
    let writeStream = fs.createWriteStream('index.html');
    writeStream.write(html);
    writeStream.on('finish', () => {
        console.log('wrote all data to file:', writeStream.path);
    });
    writeStream.end();
});

app.render('airchain', {title: config.airchain.title}, function(err, html) {
    console.log('> airchain', html.length)
    let writeStream = fs.createWriteStream('airchain.html');
    writeStream.write(html);
    writeStream.on('finish', () => {
        console.log('wrote all data to file:', writeStream.path);
    });
    writeStream.end();
});
