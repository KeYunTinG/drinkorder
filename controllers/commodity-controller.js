const helpers = require('../helpers/auth-helpers')
const db = require('../models');
const timeList = require('../timeList.json');
const crypto = require('crypto')
const User = db.User;
const Order = db.Order;

const algorithm = 'aes-256-cbc'; //加密算法
const key = crypto.randomBytes(32); //字節密鑰
const iv = crypto.randomBytes(16); //字節初始化向量

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
          orderItemSize.forEach(element => {
            if (element.id == req.body.drinkId) {
              orders.update({
                name: orderItem[0].name,
                size: element.name,
                cost: element.price,
                commodityId: element.id,
              })
                .then(() => {
                  const strId = String(orders.id)
                  let cipher = crypto.createCipheriv(algorithm, key, iv);
                  let encrypted = cipher.update(`${strId}`, 'utf8', 'hex');//第一格為加密段
                  encrypted += cipher.final('hex');
                  return res.redirect(`/confirm/${encrypted}`);
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
                  return res.redirect(`/loading/${username[0]}`);
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
  getJumpToConfirm: (req, res) => {
    if (req.params.username) {
      Order.findOne({ where: { guest: req.params.username } }).then(orders => {
        if (orders) {
          const strId = String(orders.id)
          let cipher = crypto.createCipheriv(algorithm, key, iv);
          let encrypted = cipher.update(`${strId}`, 'utf8', 'hex');//第一格為加密段
          encrypted += cipher.final('hex');
          return res.redirect(`/confirm/${encrypted}`);
        } else {
          res.redirect('back')
        }
      })
    } else {
      res.redirect('back')
    }
  },


  getConfirm: (req, res) => {
    const encrypted = String(req.params.id)
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8')
    Order.findOne({ where: { id: decrypted } }).then(orders => {
      res.render('confirm', { guest: orders.guest, name: orders.name, size: orders.size })
    })
      .catch(() => {
        return res.redirect('/starbuck');
      })
  }
}

module.exports = commodityController