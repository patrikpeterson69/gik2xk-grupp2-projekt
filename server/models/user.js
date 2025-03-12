module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      id: {type: DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
      email: {type: DataTypes.VARCHAR(200),allowNull: false,validate: 
      {
        len: [4, 200],
        isEmail: true
      }},
      first_Name: {type: DataTypes.VARCHAR},
      last_Name: {type: DataTypes.VARCHAR},
      created_At: {type: DataTypes.DATETIME},
      updated_At: {type: DataTypes.DATETIME},
      password: {type: DataTypes.VARCHAR}
    },
  );
  return User;
};