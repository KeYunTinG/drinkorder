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
  putCommodities: (req, res) => {
    Check.findByPk(req.params.id)
      .then(checks => {
        checks.update({
          absence: true
        })
          .then(() => {
            req.flash('successMessage', '修改成功');
            return res.redirect('/admin/absent')
          })
          .catch(() => {
            req.flash('errorMessage', '修改失敗');
            return res.redirect('/admin/absent')
          })
      })
      .catch(() => {
        req.flash('errorMessage', '修改失敗');
        return res.redirect('/admin/absent')
      })
  },
}

module.exports = commodityController