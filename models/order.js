'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: 'UserId'
      });
    }
  };
  Order.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    ps: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
    underscored: true
  })
  return Order;
};