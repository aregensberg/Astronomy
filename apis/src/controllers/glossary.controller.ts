import {NextFunction, Request, Response} from "express";
import {status} from "../../utils/interfaces/status";
import {getAllGlossaries} from "../../utils/Glossary/getAllGlossaries";
import {getGlossaryByGlossaryId} from "../../utils/glossary/getGlossaryByGlossaryId";
import {getGlossaryByName} from "../../utils/glossary/getGlossaryByName";


export async function getAllGlossariesController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getAllGlossaries()

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}


export async function getGlossaryByNameController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getGlossaryByName(request.body.name)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getAllGlossaryByIdController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getGlossaryByGlossaryId(request.body.id)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}