const helpers = require('../helpers/auth-helpers')
const db = require('../models');
const timeList = require('../timeList.json');
const User = db.User;
const Commodity = db.Commodity;
const Order = db.Order;
const timeListProducts = timeList.products
const commodityController = {
  getCommodities: (req, res) => {
    console.log(timeList.products[0].product_variations[0].id)
    res.render('starbuck', { time: timeList.products })
  },
  postCommodities: (req, res) => {
    //待確認此人是否點過
    const orderItem = timeListProducts.product_variation.filter(timeListProducts => timeListProducts.id == req.body.drinkId)
    //if (orderItem) {
    // Order.create({
    //   offLine: now,
    //   workTime: hour,
    //   status: '缺勤，工時未滿8小時',
    // })
    //.then(commodities => {
    // commodities = commodities.filter(Commodity => Commodity.commodityId == req.body.drinkId)
    // console.log(commodities.id)
    // res.render('confirm', { commodities })
    // })
    // .then(() => {
    //   if (orderItem) {
    //     console.log(orderItem)
    //   }
    console.log(orderItem)
    return res.redirect('/confirm');
    // })
    // .catch((err) => {
    //   return res.redirect('back')
    // })
  }
}

module.exports = commodityController