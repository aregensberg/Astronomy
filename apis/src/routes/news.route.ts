import {getAllNewsController, getNewsByNewsIdController} from "../controllers/news.controller";
import {getAllNews} from '../../utils/news/getAllNews';
import {Router} from "express";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {newsIdValidator} from "../validators/news.validator";

const {checkSchema} = require("express-validator");

export const newsRoute = Router()

newsRoute.route('/')
    .get(getAllNewsController)

newsRoute.route('/:newsId')
    .get(asyncValidatorController(checkSchema(newsIdValidator)), getNewsByNewsIdController)
