const helpers = require('../helpers/auth-helpers')
const db = require('../models');
const timeList = require('../timeList.json');
const User = db.User;
const Order = db.Order;
const commodityController = {
  getCommodities: (req, res) => {
    //console.log(timeList.products[0].product_variations[0].id)
    res.render('starbuck', { time: timeList.products })
  },
  postCommodities: (req, res) => {
    //待確認此人是否點過
    //console.log(req.body.drinkId)
    console.log(req.body.username)
    if (req.body.drinkId) {
      const orderItem = timeList.products.filter(TimeList => TimeList.product_variations.some(f => f.id == req.body.drinkId))
      const orderItemSize = orderItem[0].product_variations
      orderItemSize.forEach(element => {
        if (element.id == req.body.drinkId) {
          //待確認此人是否點過
          Order.create({
            guest: req.body.username,
            name: orderItem[0].name,
            size: element.name,
            cost: element.price,
            commodityId: element.id,
          })
        }
      })
      return res.redirect('/confirm')
    } else {
      res.redirect('back')
    }
  }
}

module.exports = commodityController