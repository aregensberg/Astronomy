import {Router} from "express";
import {getAllGlossariesController, getGlossaryByGlossaryIdController} from "../controllers/glossary.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {glossaryIdValidator} from "../validators/glossary.validator";
import {check} from "express-validator";


const {checkSchema} = require ("express-validator");

export const glossaryRoute = Router()

glossaryRoute.route('/')
	.get(getAllGlossariesController)

glossaryRoute.route("/:glossaryId")
	.get(asyncValidatorController(checkSchema(glossaryIdValidator)), getGlossaryByGlossaryIdController)

glossaryRoute.route("/glossaryId/:glossaryId")
	.get(
		asyncValidatorController(
			[check("glossaryId", " please check glossary Id and try again")
				.isString()
				.notEmpty()
				.trim()
				.escape()
			]), getGlossaryByGlossaryIdController)