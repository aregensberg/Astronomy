import {News} from "../interfaces/News";
import {connect} from "../../src/database";

export async function insertNews(news: News) {

	try {
		const mySqlConnection = await connect()

		const mySqlQuery = "INSERT INTO news(newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate) VALUES(UUID_TO_BIN(UUID()),  :misquoteAttribution, :misquoteContent, :misquoteSubmitter)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, news)

		return "News created successfully"

	} catch (error) {

		console.log(error)

	}

}