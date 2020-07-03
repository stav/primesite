const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const fs = require('fs');

app.engine('handlebars', handlebars())

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'handlebars')
app.set('partials', path.join(__dirname, 'parts'))
app.set('views', path.join(__dirname, 'views'))

app.use('/fontawesome', express.static(
  path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')
))

app.render('index', {title: 'res vs app render'}, function(err, html) {
    console.log('> html', html.length)
    let writeStream = fs.createWriteStream('index.html');
    writeStream.write(html);
    writeStream.on('finish', () => {
        console.log('wrote all data to file:', writeStream.path);
    });
    writeStream.end();
});
