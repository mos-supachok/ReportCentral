module.exports = (sequelize, DataTypes) => {
    const reportModel = sequelize.define('Report', {
        reporttype: DataTypes.STRING(255),
        topic: DataTypes.STRING(255),
        date: DataTypes.DATEONLY,
        location: DataTypes.STRING(255),
        project: DataTypes.STRING(255),
        intro: DataTypes.STRING(255),
        description: DataTypes.STRING(255),
        nextstep: DataTypes.STRING(255),
    }, {
        tableName: 'reports',
        timestamps: true,
    });
    reportModel.associate = (db => {
        reportModel.hasMany(db.ReportFile, { as: 'files' })
    })
    return reportModel;
}