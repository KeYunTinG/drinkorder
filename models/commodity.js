'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Commodity extends Model {
    static associate(models) {
    }
  };
  Commodity.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    commodityId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Commodity',
    tableName: 'Commodities',
    underscored: true
  })
  return Commodity;
};