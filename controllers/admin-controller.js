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
        let sum = 0
        orders.forEach(element => {
          sum += element.cost
        });
        console.log(sum)
        res.render('admin/orderList', { orders, sum: sum })
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
}

module.exports = adminController