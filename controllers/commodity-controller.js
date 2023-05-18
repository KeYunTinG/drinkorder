const helpers = require('../helpers/auth-helpers')
const db = require('../models');
const timeList = require('../timeList.json');
const User = db.User;
const Commodity = db.Commodity;
const commodityController = {
  getCommodities: (req, res) => {
    Commodity.findAll({
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true
    })
      .then(Commodities => {
        if (!Commodities) throw new Error("Commodity didn't exist!")
        //console.log(Commodities)
        res.render('starbuck', { Commodities })
      })
      .catch((err) => {
        return res.redirect('back')
      })
  },
}

module.exports = commodityController