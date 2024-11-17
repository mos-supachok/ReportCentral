const express = require('express')
const app = express();
const cors = require('cors');
const reportRoutes = require('./routes/report');
const db = require('./models');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/report', reportRoutes)

db.sequelize.sync().then(() => {
	app.listen(8000, () => {
		console.log('Server is running at port 8000');
	});
})
