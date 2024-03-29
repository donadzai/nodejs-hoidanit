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
            // define association here
        }
    }
    Allcode.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            key: DataTypes.STRING,
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
