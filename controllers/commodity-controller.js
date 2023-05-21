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
        console.log(req.body.drinkId0)
        console.log(req.body.drinkId)
        if (req.body.drinkId0) {
          commodities = commodities.filter(Commodity => Commodity.commodityId == req.body.drinkId0)
          console.log(0)
        } else {
          commodities = commodities.filter(Commodity => Commodity.commodityId == req.body.drinkId)
          console.log(1)
        }
        console.log(commodities)
        res.render('cupselect', { commodities })
      })
      .catch((err) => {
        return res.redirect('back')
      })
  },
  //   postCommodities: (req, res) => {
  //     //const CommodityId = req.params.id.
  //     console.log(req.body.flexRadioDefault)
  //     Cupsize.findAll({
  //       include: Commodity,
  //       order: [['createdAt', 'DESC']],
  //       raw: true,
  //       nest: true
  //     })
  //       .then(Cupsizes => {
  //         Cupsizes = Cupsizes.filter(Cupsize => Cupsize.CommodityId == req.params.id)
  //         console.log(Cupsizes)
  //         res.render('cupselect', { Cupsizes })
  //       })
  //       .catch((err) => {
  //         return res.redirect('back')
  //       })
  //   },
}

module.exports = commodityController