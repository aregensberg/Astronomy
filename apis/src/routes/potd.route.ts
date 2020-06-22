import {Router} from "express";
import {getAllPotdController} from "../controllers/potd.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";


export const potdRoute = Router()

potdRoute.route('/')
	.get(getAllPotdController)

potdRoute.route("/:glossaryId")
	.get(asyncValidatorController([check("potd", "Please check your potdId").isUUID()]), getAllPotdController)

