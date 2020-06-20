import {connect} from "../../src/database";


export async function getAllGlossaries() {

	try {
		const mysqlConnection = await connect()
		const mySqlQuery = "SELECT BIN_TO_UUID(glossaryId) AS glossaryId, glossaryName, glossaryDefinition FROM glossary";
		const [rows] = await mysqlConnection.execute(mySqlQuery)
		return rows

	} catch (error) {
		console.error(error.message)
		return undefined
	}
}