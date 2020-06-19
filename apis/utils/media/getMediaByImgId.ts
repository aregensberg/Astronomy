import {connect} from "../../src/database";




/**

 * Helper function that grabs all misquotes

 **/

export async function getMediaIsVideo(mediaIsVideo:string) {

	try {



		const mysqlConnection = await connect()

		const mySqlQuery = "SELECT BIN_TO_UUID(mediaId) AS mediaId, mediaDescription, mediaAlt, mediaIsVideo, mediaUrl FROM media WHERE mediaIsVideo = :mediaIsVideo";

		const [rows] = await mysqlConnection.execute(mySqlQuery, {mediaIsVideo})

		return rows

	} catch (error) {

		console.log(error)

		return undefined

	}

}