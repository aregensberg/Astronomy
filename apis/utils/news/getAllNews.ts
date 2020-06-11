import {connect} from "../../src/database";


/**
 * Helper function that grabs all misquotes
 **/
export async function getAllNews() {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT * FROM news";
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}