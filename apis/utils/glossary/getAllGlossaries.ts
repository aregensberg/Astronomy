import {connect} from "../../src/database";


export async function getAllGlossaries() {

	try {

		const mysqlConnection = await connect()

		const mySqlQuery = "SELECT * FROM glossary";

		const [rows] = await mysqlConnection.execute(mySqlQuery)

		return rows

	} catch (error) {

		console.log(error)

		return undefined

	}

}