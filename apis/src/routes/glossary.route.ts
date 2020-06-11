import {Router} from "express";
import {getGlossaryByGlossaryIdController} from "../controllers/glossary.controller";
import {getAllGlossaries} from "../../utils/glossary/getAllGlossaries";

export const glossaryRoute = Router()

glossaryRoute.route('/').get(getAllGlossaries)
glossaryRoute.route("/:glossaryId").get(getGlossaryByGlossaryIdController)

