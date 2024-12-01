const db = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
	const {
		firstname,
		lastname,
		username,
		password,
		employee_id,
		// confirmpassword,
		email
	} = req.body;
	const targetUser = await db.User.findOne({ where: { username: username } })
	if (targetUser) {
		res.status(400).send({ message: 'Username already taken.' })
	} else {
		const salt = bcryptjs.genSaltSync(12);
		const hashedPassword = bcryptjs.hashSync(password, salt);

		await db.User.create({
			password: hashedPassword,
			firstname,
			lastname,
			username,
			employee_id,
			email
		})

		res.status(201).send({ message: 'User created!' })
	}
}

const loginUser = async (req, res) => {
	const { username, password } = req.body;
	const targetUser = await db.User.findOne({
		where: {
			username: username,
		}
	})
	if (!targetUser) {
		return res.status(400).send({ message: 'Username or password is wrong.' })
	}
	const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password)
	if (!isCorrectPassword) {
		return res.status(400).send({ message: 'Username or password is wrong.' })
	}

	const payload = {
		role: targetUser.role,
		id: targetUser.id
	};
	const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });

	delete targetUser.password

	if (targetUser.approved_by === null) {
		return res.status(400).send({ message: "Please wait for admin approve" })
	}

	res.status(200).send({
		token: token,
		user: targetUser,
		message: 'Login successful.'
	})
}

module.exports = {
	registerUser,
	loginUser
}