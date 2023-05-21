const express = require('express')
const router = express.Router()
//const userController = require('../controllers/user-controller')
//const adminController = require('../controllers/admin-controller')
const commodityController = require('../controllers/commodity-controller')
//const passport = require('../config/passport')
//const { generalErrorHandler } = require('../middleware/error-handler')
//const { authenticated, adminAuthenticated } = require('../middleware/auth')
//router.get('/', (req, res) => res.redirect('/starbuck'))
router.get('/starbuck', commodityController.getCommodities)
//router.post('/starbuck/:id', commodityController.postCommodities)
router.post('/starbuck/confirm', commodityController.postCommodities)
//router.get('/cupselect', commodityController.getcupsize)
//router.get('/', (req, res) => res.render('starbuck'))
// router.get('/signin', userController.signInPage)
// router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
// router.get('/logout', userController.signout)


router.get('/', (req, res) => res.send('waku'))
//router.get('/', (req, res) => res.render('login'))
//router.use('/', generalErrorHandler)

module.exports = router
