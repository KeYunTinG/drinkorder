const express = require('express')
const router = express.Router()
const commodityController = require('../controllers/commodity-controller')
const adminController = require('../controllers/admin-controller')
const passport = require('../config/passport')
const { generalErrorHandler } = require('../middleware/error-handler')
const { authenticated, adminAuthenticated } = require('../middleware/auth')

router.get('/starbuck', commodityController.getCommodities)
router.post('/starbuck/confirm', commodityController.postCommodities)
router.get('/loading/:username', commodityController.getJumpToConfirm)
router.get('/confirm/:id', commodityController.getConfirm)

router.get('/signin', adminController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), adminController.signIn)
router.get('/logout', adminController.signout)

router.get('/admin/orderList', adminAuthenticated, adminController.getOrderList)
router.delete('/admin/orderList/:id', adminAuthenticated, adminController.deleteOrderList)

router.get('/', (req, res) => res.redirect('/starbuck'))
router.use('/', generalErrorHandler)

module.exports = router
