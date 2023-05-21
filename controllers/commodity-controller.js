const helpers = require('../helpers/auth-helpers')
const db = require('../models');
const timeList = require('../timeList.json');
const User = db.User;
const Commodity = db.Commodity;
const commodityController = {
  getCommodities: (req, res) => {
    res.render('starbuck', { time: timeList.products })
  },
  postCommodities: (req, res) => {
    Commodity.findAll({
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true
    })
      .then(commodities => {
        commodities = commodities.filter(Commodity => Commodity.commodityId == req.body.drinkId)
        console.log(commodities)
        res.render('confirm', { commodities })
      })
      .catch((err) => {
        return res.redirect('back')
      })
  },
}

module.exports = commodityController