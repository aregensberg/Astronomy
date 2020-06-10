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