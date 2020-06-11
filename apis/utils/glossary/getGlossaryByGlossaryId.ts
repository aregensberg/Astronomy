import {connect} from "../../src/database";


export async function getGlossaryByGlossaryId(glossaryId:String) {

	try {

		const mysqlConnection = await connect()

		const mySqlQuery = "SELECT BIN_TO_UUID(glossaryId) AS glossaryId, glossaryName, glossaryDefinition FROM glossary WHERE glossaryId= :glossaryId";

		const [rows] = await mysqlConnection.execute(mySqlQuery, {glossaryId: glossaryId})

		return rows

	} catch (error) {

		console.log(error)

		return undefined

	}

}