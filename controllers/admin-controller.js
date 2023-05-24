const bcrypt = require('bcryptjs')
const db = require('../models');
const User = db.User;
const Order = db.Order;
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
  getOrderList: (req, res) => {
    Order.findAll({
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true
    })
      .then(orders => {
        res.render('admin/orderList', { orders })
      })
      .catch((err) => {
        return res.redirect('back')
      })
  },
  deleteOrderList: (req, res) => {
    Order.findByPk(req.params.id)
      .then(orders => {
        orders.destroy()
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
  // bcrypt.compare(password, user.password).then(res => {
  //   if (!res) return cb(null, false, req.flash('errorMessage', '帳號或密碼輸入錯誤!'))
  //   return cb(null, user)
  // })
}

module.exports = adminController