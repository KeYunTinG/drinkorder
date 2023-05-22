const db = require('../models');
const User = db.User;
const userController = {
    getSignIn: (req, res) => {
        res.render('login')
    },
    postSignIn: (req, res, next) => {
        User.findOne({ where: { account: req.body.username } })
            .then(user => {
                if (!user) {
                    User.create({
                        account: req.body.username,
                    })
                }
            })
            .then(() => {
                res.redirect('/starbuck')
            })
            .catch(err => next(err))
    },
}
module.exports = userController
