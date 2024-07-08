'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.User, { foreignKey: 'positionId' });
        }
    }
    Allcode.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            keyMap: DataTypes.STRING,
            type: DataTypes.STRING,
            valueVi: DataTypes.STRING,
            valueEn: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Allcode',
        },
    );
    return Allcode;
};
