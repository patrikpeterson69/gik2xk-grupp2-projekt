module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: { type: DataTypes.INTEGER, allowNull: false },
        total_price: { type: DataTypes.DECIMAL, allowNull: false },
        status: { type: DataTypes.ENUM('pending', 'shipped', 'delivered', 'canceled'), defaultValue: 'pending' }
    });

    Order.associate = (models) => {
        Order.belongsTo(models.User);
        Order.hasMany(models.OrderItem);
    };

    return Order;
};
