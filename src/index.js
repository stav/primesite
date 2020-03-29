const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const port = 5005;
const app = express();
const fs = require('fs');

app.engine('handlebars', handlebars())

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'handlebars')
app.set('partials', path.join(__dirname, 'parts'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/gen', (req, res) => {
  res.render('index', function (err, html) {

    // console.log('html', html)
    let writeStream = fs.createWriteStream('index.html');
    writeStream.write(html);
    writeStream.on('finish', () => {
        console.log('wrote all data to file');
    });
    writeStream.end();

    res.send(html)
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
