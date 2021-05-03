const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const config = require('./config.json')

const port = 5005
const app = express()

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
  res.render('index', {title: config.index.title})
})

app.get('/airchain.html', (req, res) => {
  res.render('airchain', {title: config.airchain.title})
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
