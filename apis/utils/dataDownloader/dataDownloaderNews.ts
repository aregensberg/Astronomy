import axios from "axios"
import {insertNews} from "../news/insertNews";

interface News {
    newsId: string | null,
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
            const {data} = await axios.get("http://hubblesite.org/api/v3/news/")

            const createNews = async (array: any[]) => {
                //instead of putting the posts into an array insert them into the database.
                const news : News[] = []
                for(let currentNews of array) {
                    const result = await axios.get(`http://hubblesite.org/api/v3/news_release/${currentNews.news_id}`)
                    let detailedNews = result.data
                    let object : News = {newsId: null, newsImg: detailedNews.thumbnail_retina, newsDescription: detailedNews.abstract, newsUrl: currentNews.url, newsTitle: currentNews.name, newsDate: detailedNews.publication}
                    if (object.newsDescription.length <= 1700) {
                        await insertNews(object)
                    }
                    console.log("News successfully inserted")
                    // console.log("currentNews", currentNews)
                    // console.log("detailedNews", detailedNews)
                }
            }

            await createNews(data)

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))