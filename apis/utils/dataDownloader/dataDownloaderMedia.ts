import axios from "axios"
import {insertMedia} from "../media/insertMedia"
import {Media} from "../interfaces/Media";



function dataDownloaderMedia(): Promise<any> {
    return main();
    async function main() {
        try {
            await downloadImg()
            await downloadVideo()
        } catch (e) {
            console.error(e.message)
        }
    }

    async function downloadImg() {
        try {

            const createImg = async (array: any[]) => {
                //instead of putting the posts into an array insert them into the database.
                const  media : Media[] = []
                for (let currentMedia of array) {
                    let detailedMedia = await axios.get(`https://hubblesite.org/api/v3/image/${currentMedia.id}`);
                    if (detailedMedia.data.description !== undefined && detailedMedia.data.description.length <= 510 ) {
                        let media : Media = {mediaId: null, mediaIsVideo: 0, mediaAlt: detailedMedia.data.name, mediaDescription: detailedMedia.data.description, mediaThumbnailUrl: null, mediaUrl: detailedMedia.data.image_files[0].file_url};
                        await insertMedia(media)
                    }
                }
                // return media
            };
            for (let i=1; i<20; i++) {
                const {data} = await axios.get(`http://hubblesite.org/api/v3/images/all?page=${i}`);
                await createImg(data)
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    async function downloadVideo() {
        try {
            console.log("is this thing on?");
            const {data} = await axios.get("http://hubblesite.org/api/v3/videos/science?page=all");
            const createVideo = async (array: any[]) => {
                //instead of putting the posts into an array insert them into the database.
                const  media : Media[] = [];
                for (let currentMedia of array) {
                    let detailedMedia = await axios.get(`https://hubblesite.org/api/v3/video/${currentMedia.id}`);
                    console.log(detailedMedia.data);
                    if (detailedMedia.data.video_files!==undefined)  {
                        let mediaDescription = detailedMedia.data.short_description ?? "please delete me";
                        let media : Media = {mediaId: null, mediaIsVideo: 1, mediaAlt: currentMedia.name, mediaDescription, mediaThumbnailUrl: currentMedia.image, mediaUrl: detailedMedia.data.video_files[0].file_url};
                        console.log(media);
                        await insertMedia(media)
                        }
                }
                // return media
            };

            await createVideo(data)
        } catch (error) {
            console.error(error.message)
        }
    }
}


dataDownloaderMedia().catch(error => console.error(error.message));

