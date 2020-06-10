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