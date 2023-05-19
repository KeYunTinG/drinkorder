'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Commodity extends Model {
    static associate(models) {
      Commodity.hasMany(models.Cupsize, {
        foreignKey: 'CommodityId'
      });
    }
  };
  Commodity.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logoPath: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Commodity',
    tableName: 'Commodities',
    underscored: true
  })
  return Commodity;
};