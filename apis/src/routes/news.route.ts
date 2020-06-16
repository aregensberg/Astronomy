import {getNewsByNewsIdController} from "../controllers/news.controller";
import {getAllNews} from '../../utils/news/getAllNews';
import {Router} from "express";

export const newsRoute = Router()

newsRoute.route('/').get(getAllNews)
newsRoute.route('/:newsId').get(getNewsByNewsIdController)