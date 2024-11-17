const db = require('../models');
const fs = require('fs');

const getReport = async (req, res) => {
    const report = await db.Report.findAll();
    res.status(200).send({ report })
};

const createReport = async (req, res) => {
    const body = req.body
    // console.log(req.files)
    // console.log(req.body)

    fileList = req.files

    // add fileList as a key and values as base64
    body['files'] = []

    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        // const buffer = fs.readFileSync(file)

        body.files.push({
            filename: file.originalname,
            extensions: file.originalname.split('.').pop(),
            blob: file
        })
    }

    const newReport = await db.Report.create(body, {
        include: [{
            model: db.ReportFile,
            as: 'files'
        }]
    })
    res.status(201).send(newReport.toJSON())
};

const deleteReport = async (req, res) => {
    const targetId = Number(req.params.id);
    await db.Report.destroy({
        where: { id: targetId }
    });
    res.status(204).send();
};

const updateReport = async (req, res) => {
    const targetId = Number(req.params.id);
    const newReport = req.body.task;
    await db.Report.update({
        task: newReport
    }, {
        where: { id: targetId }
    });
    res.status(200).send({ message: 'Updating is success' });
};


module.exports = {
    createReport,
    getReport,
    updateReport,
    deleteReport
}