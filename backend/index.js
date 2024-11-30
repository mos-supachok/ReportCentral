require('dotenv').config();

const express = require('express')
const app = express();
const cors = require('cors');
const reportRoutes = require('./routes/report');
const userRoutes = require('./routes/user')
const db = require('./models');

require('./config/passport/passport')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/report', reportRoutes)
app.use('/users', userRoutes)

db.sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
  });
})
