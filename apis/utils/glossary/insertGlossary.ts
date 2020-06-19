import {Glossary} from "../interfaces/Glossary";
import {connect} from "../../src/database";

export async function insertGlossary(glossary: Glossary) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO news(newsId, newsImg, newsDescription, newsUrl, newsTitle, newsDate) VALUES(UUID_TO_BIN(UUID()), :newsImg, :newsDescription, :newsUrl, :newsTitle, :newsDate)";

		const [rows] = await mySqlConnection.execute(mySqlQuery, glossary)
		return "Glossary created successfully"
	} catch (error) {
		console.log(error)
	}
}

const glossary = {glossaryId: null, glossaryName: "Hello", glossaryDefinition: "World"}
insertGlossary(glossary).catch(error => console.error(error))
console.log(process.env)