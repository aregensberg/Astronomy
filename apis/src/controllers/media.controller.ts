import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {getAllMedia} from "../../utils/media/getAllMedia";
import {getMediaByMediaIsVideo} from "../../utils/media/getMediaByMediaIsVideo";
import {getMediaByMediaId} from "../../utils/media/getMediaByMediaId"

export async function getAllMediaController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getAllMedia()

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.error(error.msg)

	}

}



export async function getMediaByMediaIsVideoController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const {mediaIsVideo} = request.params

		const data = await getMediaByMediaIsVideo(mediaIsVideo)
		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.error(error.msg)

	}

}


export async function getMediaByMediaIdController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const {mediaId} = request.params

		const data = await getMediaByMediaId(mediaId)


		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.error(error.msg)

	}

}