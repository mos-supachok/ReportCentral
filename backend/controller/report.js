const db = require('../models');
const fs = require('fs');

const getReport = async (req, res) => {
	// const report = await db.Report.findAll();
	// res.status(200).send({ report })
	const report = await db.Report.findAll({ where: { user_id: req.user.id } });
	res.status(200).send({ report })
};

const createReport = async (req, res) => {
	// const body = req.body
	// // console.log(req.files)
	// // console.log(req.body)

	// const fileList = req.files

	// // add fileList as a key and values as base64
	// body['files'] = []

	// for (let i = 0; i < fileList.length; i++) {
	// 	const file = fileList[i];
	// 	// const buffer = fs.readFileSync(file)

	// 	body.files.push({
	// 		filename: file.originalname,
	// 		extensions: file.originalname.split('.').pop(),
	// 		blob: file
	// 	})
	// }

	// const newReport = await db.Report.create(body, {
	// 	include: [{
	// 		model: db.ReportFile,
	// 		as: 'files'
	// 	}]
	// })
	// res.status(201).send(newReport.toJSON())
	///////////////////////////////////////////////////
	const newReport = await db.Report.create({
		reporttype: req.body.reporttype,
		topic: req.body.topic,
		user_id: req.user.id
	})
	res.status(204).send(newReport);
};

const deleteReport = async (req, res) => {
	const targetId = Number(req.params.id);
	const targetReport = await db.Report.findOne({ where: { id: targetId, user_id: req.user.id } })
	if (targetReport) {
		await targetReport.destroy();
		res.status(204).send();
	} else {
		res.status(404).send({ message: 'Reprot not found.' })
	}
};

const updateReport = async (req, res) => {
	const targetId = Number(req.params.id);
	const newReport = req.body.task;
	const targetReport = await db.Report.findOne({ where: { id: targetId, user_id: req.user.id } })
	if (targetReport) {
		await targetReport.update({
			task: newReport,
		})
		res.status(200).send({ message: 'Updating is success.' });
	} else {
		res.status(404).send({ message: 'Reprot not found.' })
	}
};


module.exports = {
	createReport,
	getReport,
	updateReport,
	deleteReport
}