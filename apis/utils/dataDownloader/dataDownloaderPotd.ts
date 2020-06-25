import axios from "axios"
// import {insertPotd} from "../potd/";


// interface Glossary {
//
// }

class Potd {
}

function dataDownloaderPotd() : Promise<any> {
	return main()
	async function main() {
		try {
			await downloadPotd()

		} catch (e) {
			console.error(e.message)
		}
	}

	async function downloadPotd() {
		try {
			const {data} = await axios.get("https://api.nasa.gov/planetary/apod?api_key=fd9oJkdHLMj8bmN8GBNrQ8HISrmsTvaiu0KKD6Xv")
			const createPotd = async (array: any[]) => {
				//instead of putting the posts into an arrray insert them into the database.
				for(let currentPotd of array) {
					let object : Potd = {}
					// await insertPotd(object)
				}
			}

			await createPotd(data)
		} catch (error) {
			console.error(error.message)
		}
	}
}

dataDownloaderPotd().catch(error => console.error(error.message))