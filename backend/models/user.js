module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(200),
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
    },
    name: {
      type: DataTypes.STRING(100),
    }
  })

  userModel.associate = models => {
    userModel.hasMany(models.Report, { foreignKey: 'user_id' })
  }

  return userModel;
}