'use strict';
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Commodity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Commodity.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    logoPath: DataTypes.STRING,
    cost: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Commodity',
    tableName: 'Commodities',
    underscored: true
  })
  return Commodity;
};