const express = require('express')
const session = require('express-session');
const helpers = require('./helpers/auth-helpers')
const passport = require('./config/passport')
//const handlebarsHelpers = require('./helpers/handlebars-helpers')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const methodOverride = require('method-override');
const flash = require('connect-flash');
const app = express()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use((req, res, next) => {
  res.locals.successMessage = req.flash('successMessage');
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});
app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${3000}!`))

module.exports = app