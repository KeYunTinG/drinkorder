const bcrypt = require('bcryptjs')
const db = require('../models');
const User = db.User;
const Check = db.Check;
const adminController = {
  signInPage: (req, res) => {
    res.render('login')
  },
  signIn: (req, res) => {
    req.flash('successMessage', '成功登入!')
    res.redirect('/admin/orderList');
  },
  signout: (req, res) => {
    req.flash('successMessage', '登出成功！')
    req.logout()
    res.redirect('/signin')
  },
  getorderList: (req, res) => {
    Check.findAll({
      include: User,
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true
    })
      .then(checks => {
        if (!checks) throw new Error("Restaurant didn't exist!")
        checks = checks.filter(Check => Check.absence == false)
        res.render('admin/orderList', { checks })
      })
      .catch((err) => {
        return res.redirect('back')
      })
  },
  editorderList: (req, res) => {
    Check.findByPk(req.params.id)
      .then(checks => {
        checks.update({
          absence: true
        })
          .then(() => {
            req.flash('successMessage', '修改成功');
            return res.redirect('/admin/orderList')
          })
          .catch(() => {
            req.flash('errorMessage', '修改失敗');
            return res.redirect('/admin/orderList')
          })
      })
      .catch(() => {
        req.flash('errorMessage', '修改失敗');
        return res.redirect('/admin/orderList')
      })
  },
}

module.exports = adminController