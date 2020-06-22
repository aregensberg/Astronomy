// import {connect} from "../../src/database";
//
//
// export async function getAllPotd() {
//
// 	try {
// 		const mysqlConnection = await connect()
// 		const mySqlQuery = "SELECT BIN_TO_UUID() AS , ,  FROM ";
// 		const [rows] = await mysqlConnection.execute(mySqlQuery)
// 		return rows
//
// 	} catch (error) {
// 		console.error(error.message)
// 		return undefined
// 	}
// }