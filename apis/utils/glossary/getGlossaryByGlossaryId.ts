import {connect} from "../../src/database";

export async function getGlossaryByGlossaryId(glossaryId:String) {

	try {
		console.log("star", {glossaryId})
		const mysqlConnection = await connect();
		const mySqlQuery = "SELECT BIN_TO_UUID(glossaryId) as glossaryId, BIN_TO_UUID(glossaryId) as glossaryId, glossaryName, glossaryDefinition FROM glossary WHERE glossaryId = UUID_TO_BIN(:glossaryId)"
		const [rows] = await mysqlConnection.execute(mySqlQuery, {glossaryId: glossaryId})
		return rows

	} catch (error) {
		console.error(error.message)
		return undefined
	}
}