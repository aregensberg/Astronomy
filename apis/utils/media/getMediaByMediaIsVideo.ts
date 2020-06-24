import {connect} from "../../src/database";
/**
 * Helper function that grabs all misquotes
 **/
export async function getMediaByMediaIsVideo(mediaIsVideo:string) {
    try {
        console.log(mediaIsVideo)
        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(mediaId) AS mediaId, mediaIsVideo, mediaDescription, mediaAlt, mediaUrl FROM media WHERE mediaIsVideo = :mediaIsVideo ORDER BY RAND() LIMIT 1";
        const [rows] = await mysqlConnection.execute(mySqlQuery, {mediaIsVideo: Number(mediaIsVideo)})
        console.log(rows)
        return rows
    } catch (error) {
        console.error(error)
        return undefined
    }
}



