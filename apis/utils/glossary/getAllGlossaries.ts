import {connect} from "../../src/database";
import {Glossary} from "../interfaces/Glossary";



/**

 * Helper function that grabs all misquotes

 **/

export async function getAllGlossaries() {

	try {


		const mysqlConnection = await connect()

		const mySqlQuery = "SELECT BIN_TO_UUID(misquoteId) AS misquoteId, misquoteAttribution, misquoteContent, misquoteSubmitter FROM misquote";

		const [rows] = await mysqlConnection.execute(mySqlQuery)

		return rows

	} catch (error) {

		console.log(error)

		return undefined

	}

}