import {connect} from "../../src/database";


/**
 * Helper function that grabs all misquotes
 **/
export async function getNewsByNewsId(newsId:String) {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(newsId) AS newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate FROM news WHERE newsId = :newsId";
        const [rows] = await mysqlConnection.execute(mySqlQuery, {newsId: newsId})
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}