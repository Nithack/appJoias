'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            user.hasMany(models.product, {
                foreigKey: 'id',
                as: 'products',
                onDelete: 'CASCADE'
            })
        }
    };
    user.init({
        userId: {
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
        }
    }, {
        defaultScope: {},
        scopes: {
            findAllUsers: {
                attributes: {
                    exclude: ['updatedAt', 'createdAt']
                }
            }
        },
        sequelize,
        modelName: 'user',

    });
    return user;
};