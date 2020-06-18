import {Media} from "../interfaces/Media";
import {connect} from "../../src/database";

export async function insertMedia(media: Media) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO media(mediaId, mediaAlt, mediaDescription, mediaIsVideo, mediaUrl) VALUES(UUID_TO_BIN(UUID()), :mediaAlt, :mediaDescription, :mediaIsVideo, :mediaUrl)";

		const [rows] = await mySqlConnection.execute(mySqlQuery, media)
		return "Media created successfully"
	} catch (error) {
		console.log(error.msg)
	}
}