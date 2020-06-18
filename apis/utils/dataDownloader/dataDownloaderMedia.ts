import axios from "axios"
import {insertMedia} from "../media/insertMedia"
import {Media} from "../interfaces/Media";



function dataDownloaderMedia(): Promise<any> {
    return main()
    async function main() {
        try {
            await downloadMedia()
        } catch (e) {
            console.log(e.msg)
        }
    }

    async function downloadMedia() {
        try {
            const {data} = await axios.get("http://hubblesite.org/api/v3/images/all")

            const createMedia = async (array: any[]) => {
                //instead of putting the posts into an array insert them into the database.
                const  media : Media[] = []
                for (let currentMedia of array) {
                    let detailedMedia = await axios.get(`https://hubblesite.org/api/v3/image/${currentMedia.id}`)
                    if (detailedMedia.data.description !== undefined && detailedMedia.data.description.length <= 510 ) {
                        let media : Media = {mediaId: null, mediaIsVideo: 0, mediaAlt: detailedMedia.data.name, mediaDescription: detailedMedia.data.description, mediaUrl: detailedMedia.data.image_files[0].file_url}
                        await insertMedia(media)
                    }


                    // TODO for each current media make an axios request to get detailed information for image
                    // TODO decide what fields we want to use to create media and set media is video to 0


                    // let media : Media = {mediaId: currentMedia.Id, mediaIsVideo: currentMedia.name, mediaDescription: , mediaDate: }
                    // media.push(media)
                }
                // return media
            }

        await createMedia(data)
        } catch (error) {
            console.error(error.msg)
        }
    }
}

​
dataDownloaderMedia().catch(error => console.error(error))

