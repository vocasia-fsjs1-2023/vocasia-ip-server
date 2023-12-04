require('dotenv').config();
const express = require('express');
const { appSetup } = require('./libs/app-setup');
const { loggerSetup } = require('./libs/logger-setup');
const { sequelize } = require('./models')

const app = express();

async function main() {
	try {
		appSetup(app);
		loggerSetup(app);

		await sequelize.authenticate();
		app.use('/api/user', require('./routes/user'));
		app.use('/api/notes', require('./routes/notes'));

		const port = 3000;
		app.listen(port, () => {
			console.log(`Server listening on http://localhost:${port}...`);
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

main();