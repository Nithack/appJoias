const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        static associate(models) {}
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
        image: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo price precisa ser preenchido." },
                notNull: { msg: 'O campo price precisa ser preenchido' },
            }
        },
        describe: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo describe precisa ser preenchido." },
                notNull: { msg: 'O campo describe precisa ser preenchido' },
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "O campo amount precisa ser preenchido." },
                notNull: { msg: 'O campo amount precisa ser preenchido' },
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
        defaultScope: {},
        scopes: {
            findAllProducts: {
                attributes: {
                    exclude: ['updatedAt', 'createdAt']
                }
            }
        },
        sequelize,
        modelName: 'product',
    });
    product.associate = models => {
        product.belongsTo(models.user, {
            as: 'user',
            foreignKey: 'userId'
        })
    }
    return product;
};