import {getAllNews} from "../../utils/news/getAllNews";
import {getNewsByNewsId} from "../../utils/news/getNewsByNewsId";
import {Status} from "../../utils/interfaces/status";
import {NextFunction, Request, Response} from "express";

export async function getAllNewsController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const data = await getAllNews()
		console.log(data)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}

export async function getNewsByNewsIdController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {newsId} = request.params
		const data = await getNewsByNewsId(newsId)
		console.log(data)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}
