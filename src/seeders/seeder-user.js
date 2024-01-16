'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'admin@gmail.com',
                password: '123',
                firstName: 'dona',
                lastName: 'dzai',
                address: 'HN, VN',
                phonenumber: 113,
                gender: 1,
                positionId: 'doctor',
                roleId: 'R1',
                image: 'https://cdn.diemnhangroup.com/seoulcenter/2022/11/gai-xinh-1.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
