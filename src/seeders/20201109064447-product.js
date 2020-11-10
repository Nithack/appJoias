'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'product', [{
                name: 'prata',
                price: 10,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'ouro',
                price: 5,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {},
    ),

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};