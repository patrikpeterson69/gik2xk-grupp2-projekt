module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        description: { type: DataTypes.VARCHAR },
        price: { type: DataTypes.DOUBLE, allowNull: false },
        created_at: {type: DataTypes.DATETIME},
        updated_at: {type: DataTypes.DATETIME},
        imageUrl: { type: DataTypes.VARCHAR}
    });

    Product.associate = (models) => {
        Product.belongsToMany(models.Category, { through: 'ProductCategory' });
    };

    return Product;
};