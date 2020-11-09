'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {
            product.belongsTo(models.user, {
                foreignKey: 'userId',
                as: 'owner',
                onDelete: 'CASCADE'
            })
        }
    };
    product.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo name precisa ser preenchido." },
                notNull: { msg: 'O campo name precisa ser preenchido' },
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo price precisa ser preenchido." },
                notNull: { msg: 'O campo price precisa ser preenchido' },
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo price precisa ter um owner." },
                notNull: { msg: 'O campo price precisa ter um owner' },
            }
        },
    }, {
        sequelize,
        modelName: 'product',
    });
    return product;
};