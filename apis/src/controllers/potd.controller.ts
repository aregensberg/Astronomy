import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {getAllPotd} from "../../utils/potd/getAllPotd";


export async function getAllPotdController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const data = await getAllPotd()
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.error(error.message)
	}
}
