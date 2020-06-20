import {connect} from "../../src/database";

export async function getGlossaryByGlossaryName(glossaryName:string) {

	try {
		const mysqlConnection = await connect();
		const mySqlQuery = "SELECT BIN_TO_UUID(glossaryName) as glossaryName, BIN_TO_UUID(glossaryName) as glossaryId, glossaryName, glossaryDefinition FROM glossary WHERE glossaryName = UUID_TO_BIN(:glossaryName)"
		const [rows] = await mysqlConnection.execute(mySqlQuery, {glossaryName: glossaryName})
		return rows
	} catch (error) {
		console.error(error.message)
		return undefined
	}
}