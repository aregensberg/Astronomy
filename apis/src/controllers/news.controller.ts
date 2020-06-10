import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {getAllNews} from "../../utils/news/getAllNews";
import {getNewsByDescription} from "../../utils/news/getNewsByDescription";
import {getNewsByDescriptionAndTitle} from "../../utils/news/getNewsByDescriptionAndTitle";
import {getNewsByNewsDate} from "../../utils/news/getNewsByNewsDate";
import {getNewsByNewsId} from "../../utils/news/getNewsByNewsId";
import {getNewsByNewsImg} from "../../utils/news/getNewsByNewsImg";
import {getNewsByTitle} from "../../utils/news/getsNewsByTitle";
import {News} from "../../utils/interfaces/News";

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

export async function getNewsByDescriptionController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getNewsByDescription(request.body.description)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getNewsByDescriptionAndTitle(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		// const data = await getNewsByDescriptionAndTitle(request.body.description.title)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getNewsByNewsDate(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getNewsByNewsDate(request.body.date)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getNewsByNewsId(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getNewsByNewsId(request.body.id)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getNewsByNewsImg(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getNewsByNewsImg(request.body.image)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getNewsByTitle(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getNewsByTitle(request.body.title)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}