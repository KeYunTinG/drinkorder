'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cupsize extends Model {
    static associate(models) {
      Cupsize.belongsTo(models.Commodity, {
        foreignKey: 'CommodityId'
      });
    }
  };
  Cupsize.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cupsize',
    tableName: 'Cupsizes',
    underscored: true
  })
  return Cupsize;
};