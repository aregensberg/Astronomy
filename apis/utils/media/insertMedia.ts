import {Media} from "../interfaces/Media";
import {connect} from "../../src/database";

export async function insertMedia(media: Media) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO media(mediaId, mediaIsVideo, mediaDescription, mediaAlt, mediaThumbnailUrl, mediaUrl) VALUES(UUID_TO_BIN(UUID()), :mediaIsVideo, :mediaDescription, :mediaAlt, :mediaThumbnailUrl, :mediaUrl)";

		const [rows] = await mySqlConnection.execute(mySqlQuery, media)
		return "Media created successfully"
	} catch (error) {
		console.log(error.msg)
	}
}