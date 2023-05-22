'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
    }
  };
  Order.init({
    guest: DataTypes.STRING,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    commodityId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'Orders',
    underscored: true
  })
  return Order;
};