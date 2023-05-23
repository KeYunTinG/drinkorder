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
    if (req.body.drinkId) {
      const username = req.body.username.filter(element => element.length > 0)
      const orderItem = timeList.products.filter(TimeList => TimeList.product_variations.some(f => f.id == req.body.drinkId))
      const orderItemSize = orderItem[0].product_variations
      //確認此人是否點過
      Order.findOne({ where: { guest: username[0] } }).then(orders => {
        if (orders) {
          const id = orders.id
          orderItemSize.forEach(element => {
            if (element.id == req.body.drinkId) {
              orders.update({
                name: orderItem[0].name,
                size: element.name,
                cost: element.price,
                commodityId: element.id,
              })
                .then(() => {
                  return res.redirect(`/confirm/${orders.id}`);
                })
                .catch(() => {
                  return res.redirect('/starbuck');
                })
            }
          })
        } else {
          orderItemSize.forEach(element => {
            if (element.id == req.body.drinkId) {
              Order.create({
                guest: username[0],
                name: orderItem[0].name,
                size: element.name,
                cost: element.price,
                commodityId: element.id,
              })
                .then(() => {
                  return res.redirect(`/confirm/${orders.id}`);
                })
                .catch(() => {
                  return res.redirect('/starbuck');
                })
            }
          })
        }
      })
    } else {
      res.redirect('back')
    }
  },
  getConfirm: (req, res) => {
    Order.findOne({ where: { id: req.params.id } }).then(orders => {
      res.render('confirm', { guest: orders.guest, name: orders.name })
    })
      .catch(() => {
        return res.redirect('/starbuck');
      })
  }

}

module.exports = commodityController