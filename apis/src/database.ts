import { createPool, Pool } from 'mysql2/promise';
// require('dotenv').config();

// Database connection. Can use config from .env file (based on example.env) or the defaults



export async function connect (): Promise<Pool> {

	const connection = await createPool({

		host: process.env.HOST,
		password: process.env.MYSQL_PASSWORD,
		user: process.env.MYSQL_USER,
		database: process.env.MYSQL_DATABASE,
		connectionLimit: 10,
		namedPlaceholders: true

	});

	//@ts-ignore
<<<<<<< HEAD

=======
>>>>>>> dad7e819d468f77a7461587186e6796801932bb6
	return connection;

}