const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const port = 5005
const app = express()
const fs = require('fs')

app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views/partials'),
  layoutsDir: path.join(__dirname, 'views/layouts'),
  extname: '.handlebars',
}))

app.use(express.static(path.join(__dirname, 'static')))

app.use('/fontawesome', express.static(
  path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')
))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/airchain', (req, res) => {
  res.render('airchain')
})

app.get('/gen', (req, res) => {
  // Render the index view and register a callback to process it
  res.render('index', function (err, html) {

    // console.log('html', html)
    let writeStream = fs.createWriteStream('index.html')
    writeStream.write(html)
    writeStream.on('finish', () => {
      console.log('wrote all data to file')
    })
    writeStream.end()

    res.send(html)
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
