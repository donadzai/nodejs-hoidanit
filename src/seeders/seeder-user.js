'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'kieuduydoan2k2@gmail.com',
                password: '1',
                firstName: 'doan',
                lastName: 'dzai',
                address: 'HN, VN',
                phonenumber: 113,
                gender: 'Nam',
                positionId: 'Giáo sư',
                roleId: 'Quản trị viên',
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
