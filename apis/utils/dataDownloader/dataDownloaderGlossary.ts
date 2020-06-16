import axios from "axios"
import {insertGlossary} from "../glossary/insertGlossary";

interface Glossary {
	glossaryId: string | null
	glossaryName: string
	glossaryDefinition: string
}

function dataDownloaderGlossary() : Promise<any> {
	return main()
	async function main() {
		try {
			await downloadGlossary()

		} catch (e) {
			console.log(e)
		}
	}

	async function downloadGlossary() {
		try {
			const {data} = await axios.get("http://hubblesite.org/api/v3/glossary?page=all")
			const createGlossaries = async (array: any[]) => {
				//instead of putting the posts into an arrray insert them into the database.
				const  Glossaries : Glossary[] = []
				for(let currentGlossary of array) {
					let object : Glossary = {glossaryId: null, glossaryName: currentGlossary.name, glossaryDefinition: currentGlossary.definition}
					await insertGlossary(object)
				}
			}

			await createGlossaries(data)
		} catch (error) {
			console.error(error)
		}
	}
}

dataDownloaderGlossary().catch(error => console.error(error))