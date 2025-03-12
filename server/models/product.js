module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        price: { type: DataTypes.DECIMAL, allowNull: false },
        stock: { type: DataTypes.INTEGER, defaultValue: 0 },
        imageUrl: { type: DataTypes.STRING }
    });

    Product.associate = (models) => {
        Product.belongsToMany(models.Category, { through: 'ProductCategory' });
    };

    return Product;
};
