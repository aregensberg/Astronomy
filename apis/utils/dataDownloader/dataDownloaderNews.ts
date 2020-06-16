import axios from "axios"
import {insertNews} from "../news/insertNews";

interface News {
    newsId: string,
    newsImg: string,
    newsDescription: string,
    newsUrl: string,
    newsTitle: string,
    newsDate: string
}

function dataDownloader() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadNews()

        } catch (e) {
            console.log(e)
        }
    }

    async function downloadNews() {
        try {
            const {data} = await axios.get("http://hubblesite.org/api/v3/news?page=all")
            console.log(data)
            const createNews = async (array: any[]) => {
                //instead of putting the posts into an array insert them into the database.
                for(let currentNews of array) {
                    let object : News = {newsId: currentNews.news_id, newsImg: currentNews.keystone_image_1x, newsDescription: currentNews.abstract, newsUrl: currentNews.url, newsTitle: currentNews.name, newsDate: currentNews.publication}
                    await insertNews(object)
                }
            }

            await createNews(data)

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))