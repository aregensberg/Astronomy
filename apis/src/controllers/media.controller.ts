import {NextFunction, Request, Response} from "express";
import {status} from "../../utils/interfaces/status";
import {getAllMedia} from "../../utils/media/getAllMedia";
import {getMediaByDescription} from "../../utils/media/getMediaByDescription";
import {getMediaByImgId} from "../../utils/media/getMediaByImgId";


export async function getAllMediaController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getAllMedia()

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getMediaByDescriptionController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getMediaByDescription(request.body.description)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getMediaByImgIdController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getMediaByImgId(request.body.id)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}