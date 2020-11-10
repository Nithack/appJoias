const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {

        }
    };
    user.init({
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
    user.associate = models => {
        user.hasMany(models.product, {
            as: 'products',
            foreignKey: 'userId'
        })
    }
    return user;
};