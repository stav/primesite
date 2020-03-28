const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const port = 5005;
const app = express();

app.engine('handlebars', handlebars({
	defaultLayout: 'main',
}))

app.use(express.static(path.join(__dirname, 'static')))

app.set('view engine', 'handlebars')
app.set('partials', path.join(__dirname, 'parts'));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
