const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars');
const app = express()
const port = 30001
const route = require('./routes')
const methodOverride = require('method-override')

const db = require('./config/db/index')
// init route
route(app)
db.connect()
app.use(express.static(path.join(__dirname, 'public')))


app.use(morgan('combined'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())  
// app.use(methodOverride('_method'))
app.use(methodOverride('X-HTTP-Method-Override'))

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources','views'));



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})