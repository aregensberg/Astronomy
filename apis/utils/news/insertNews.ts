import {News} from "../interfaces/news";
import {connect} from "../../src/database";

export async function insertNews(News: News) {

	try {

		const mySqlConnection = await connect()

		const mySqlQuery = "INSERT INTO news(newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate) VALUES(UUID_TO_BIN(UUID()), :newsImg, :newsDescription, :newsUrl, :newsTitle, :newsDate)";



		const [rows] = await mySqlConnection.execute(mySqlQuery, News)

		return "Misquote created successfully"

	} catch (error) {

		console.log(error)

	}

}