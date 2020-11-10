'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'user', [{
                name: 'Jane Doe',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'adam',
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