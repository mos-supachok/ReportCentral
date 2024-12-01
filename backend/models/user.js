module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(200),
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
    },
    role: {
      type: DataTypes.ENUM('admin', 'user')
    },
    firstname: {
      type: DataTypes.STRING(200),
    },
    lastname: {
      type: DataTypes.STRING(200),
    },
    email: {
      type: DataTypes.STRING(255),
    },
    employee_id: {
      type: DataTypes.STRING(255),
    },
    approved_by: {
      type: DataTypes.BIGINT()
    }
  })

  userModel.associate = models => {
    userModel.hasMany(models.Report, { foreignKey: 'user_id' })
  }

  return userModel;
}