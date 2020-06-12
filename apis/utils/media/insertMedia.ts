import {Media} from "../interfaces/media";
import {connect} from "../../src/database";

export async function insertMisquote(media: Media) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO media(mediaId, imgId, mediaIsVideo, mediaDescription, mediaDate) VALUES(UUID_TO_BIN(UUID()), :imgId, :mediaIsVideo, :mediaDescription, :mediaDate)";

		const [rows] = await mySqlConnection.execute(mySqlQuery, media)
		return "Media created successfully"
	} catch (error) {
		console.log(error)
	}
}