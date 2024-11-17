module.exports = (sequelize, DataTypes) => {
    const reportFileModel = sequelize.define('ReportFile', {
        filename: DataTypes.STRING(255),
        extensions: DataTypes.STRING(255), // .doc, .jpg
        blob: DataTypes.BLOB
    }, {
        tableName: 'reports_files',
        timestamps: true,
    });
    reportFileModel.associate = (db => {
        reportFileModel.belongsTo(db.Report)
    })
    return reportFileModel
}