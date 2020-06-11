import {connect} from "../../src/database";


/**
 * Helper function that grabs all misquotes
 **/
export async function getNewsByTitle(newsTitle:string) {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(newsId) AS newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate FROM news WHERE newsTitle = :newsTitle";
        const [rows] = await mysqlConnection.execute(mySqlQuery, {newsTitle: newsTitle})
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}