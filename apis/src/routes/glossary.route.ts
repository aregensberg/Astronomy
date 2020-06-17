import {Router} from "express";
import {getAllGlossariesController, getGlossaryByGlossaryIdController} from "../controllers/glossary.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {glossaryIdValidator} from "../validators/glossary.validator";

const {checkSchema} = require ("express-validator");

export const glossaryRoute = Router()

glossaryRoute.route('/')
	.get(getAllGlossariesController)

glossaryRoute.route("/:glossaryId")
	.get(asyncValidatorController(checkSchema(glossaryIdValidator)), getGlossaryByGlossaryIdController)


// glossaryRoute.route("/glossaryId/:glossaryId").get(getGlossaryByGlossaryIdController)