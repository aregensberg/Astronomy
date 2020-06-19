import {connect} from "../../src/database";




/**

 * Helper function that grabs all misquotes

 **/

export async function getAllMedia() {

    try {



        const mysqlConnection = await connect()

        const mySqlQuery = "SELECT BIN_TO_UUID(mediaId) AS mediaId, mediaIsVideo, mediaDescription, mediaAlt, mediaUrl FROM media";

        const [rows] = await mysqlConnection.execute(mySqlQuery)

        return rows

    } catch (error) {

        console.error(error.msg)

        return undefined

    }

}