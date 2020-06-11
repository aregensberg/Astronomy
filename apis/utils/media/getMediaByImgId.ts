import {connect} from "../../src/database";




/**

 * Helper function that grabs all misquotes

 **/

export async function getMediaByImgId(imgId:String) {

	try {



		const mysqlConnection = await connect()

		const mySqlQuery = "SELECT BIN_TO_UUID(imgId) AS imgId, mediaIsVideo, mediaDescription, mediaDate FROM media WHERE imgId= :imgId";

		const [rows] = await mysqlConnection.execute(mySqlQuery, {imgId: imgId})

		return rows

	} catch (error) {

		console.log(error)

		return undefined

	}

}