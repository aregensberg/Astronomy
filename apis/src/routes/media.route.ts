import {getMediaByImgIdController} from "../controllers/media.controller";
import {getAllMedia} from "../../utils/media/getAllMedia";
import {Router} from "express";


export const mediaRoute = Router()


mediaRoute.route('/').get(getAllMedia)
mediaRoute.route('/:imgId').get(getMediaByImgIdController)