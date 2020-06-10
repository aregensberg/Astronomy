import {connect} from "../../src/database";


/**
 * Helper function that grabs all misquotes
 **/
export async function getNewsByDescription() {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(newsId) AS newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate FROM News";
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}