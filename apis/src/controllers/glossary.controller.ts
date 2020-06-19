import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {getAllGlossaries} from "../../utils/glossary/getAllGlossaries";
import {getGlossaryByGlossaryId} from "../../utils/glossary/getGlossaryByGlossaryId";



export async function getAllGlossariesController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const data = await getAllGlossaries()
<<<<<<< HEAD
=======


>>>>>>> origin/sprint-3
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
<<<<<<< HEAD
		console.error(error.message)
=======

		console.log(error.error)

>>>>>>> origin/sprint-3
	}
}

export async function getGlossaryByGlossaryIdController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {glossaryId} = request.params;
		const data = await getGlossaryByGlossaryId(glossaryId)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.error(error.message)
	}
}
