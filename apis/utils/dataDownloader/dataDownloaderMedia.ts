import axios from "axios"


export interface Media {


    mediaId: string,

    mediaIsVideo: 1,

    mediaDescription: string,

    mediaDate: string

}
function dataDownloaderMedia() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadMedia()

        } catch (e) {
            console.log(e)
        }
    }

    async function downloadMedia() {
        try {
            const {data} = await axios.get("hubblesite.org/api/v3/images/all")

            const createMedia = (array: any[]) : Media[] => {
                //instead of putting the posts into an array insert them into the database.
                const  media : Media[] = []
                for(let currentMedia of array) {
                    let media : Media = {mediaId: currentMedia.Id, mediaIsVideo: currentMedia.name, mediaDescription: , mediaDate: }
                    media.push(media)
                }
                return media
            }

            console.log(createMedia(data))

        } catch (error) {
            console.error(error)
        }
    }
}
​
dataDownloader().catch(error => console.error(error))