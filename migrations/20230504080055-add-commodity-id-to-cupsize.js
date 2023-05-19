'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Cupsizes', 'commodity_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Commodities',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Cupsizes', 'commodity_id')
  }
}
