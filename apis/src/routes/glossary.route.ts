import {Router} from "express";
import {getAllGlossariesController, getGlossaryByGlossaryIdController} from "../controllers/glossary.controller";
import {getAllGlossaries} from "../../utils/glossary/getAllGlossaries";

export const glossaryRoute = Router()

glossaryRoute.route('/').get(getAllGlossariesController)
glossaryRoute.route("/:glossaryId").get(getGlossaryByGlossaryIdController)
