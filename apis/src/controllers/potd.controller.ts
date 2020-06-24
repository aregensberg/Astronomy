import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import axios from "axios"
// import {getAllPotd} from "../../utils/potd/getAllPotd";


export async function getAllPotdController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {data} = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		return response.json({status: 400, message: error.message, data: null})
	}
}
