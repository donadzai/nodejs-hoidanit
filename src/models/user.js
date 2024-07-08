'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap' });
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            address: DataTypes.STRING,
            phonenumber: DataTypes.INTEGER,
            gender: DataTypes.STRING,
            roleId: DataTypes.STRING,
            positionId: DataTypes.STRING,
            image: DataTypes.BLOB,
        },
        {
            sequelize,
            modelName: 'User',
            paranoid: true,
            deletedAt: 'softDelete',
        },
    );
    return User;
};
