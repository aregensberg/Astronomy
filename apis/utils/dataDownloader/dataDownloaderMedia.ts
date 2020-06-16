import axios from "axios"


export interface Media {


    mediaId: string,

    mediaIsVideo: 1,

    mediaDescription: string,

    mediaDate: string

}

function dataDownloaderMedia(): Promise<any> {
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
            const {data} = await axios.get("http://hubblesite.org/api/v3/images/all")

            const createMedia = (array: any[]) => {
                //instead of putting the posts into an array insert them into the database.
                // const  media : Media[] = []
                for (let currentMedia of array) {
                    // TODO for each current media make an axios request to get detailed information for image
                    // TODO decide what fields we want to use to create media and set media is video to 0
                    // let media : Media = {mediaId: currentMedia.Id, mediaIsVideo: currentMedia.name, mediaDescription: , mediaDate: }
                    // media.push(media)
                }
                // return media
            }

        createMedia(data)
        } catch (error) {
            console.error(error)
        }
    }
}

​
dataDownloaderMedia().catch(error => console.error(error))