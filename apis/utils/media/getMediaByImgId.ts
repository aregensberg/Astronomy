
import {media} from "../interfaces/Media";
import {News} from "../interfaces/News";
import {glossary} from "../interfaces/Glossary";

import {connect} from "../../src/database";



async function getMediaByImgId(misquoteId : string) : null | undefined {

	try {

		const mysqlConnection = await connect();



		const mySqlQuery = 'SELECT BIN_TO_UUID() as , , ,  FROM media WHERE = UUID_TO_BIN(:)'



		const [rows] =  await mysqlConnection.execute(mySqlQuery, misquoteId)



		return rows

	} catch (error) {

		console.log(error)

		return undefined

	}

}



getMediaByImgId("uuid")