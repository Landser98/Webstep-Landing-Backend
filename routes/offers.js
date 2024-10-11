import Router from "express"
import OffersController from "../controllers/offers.js";

const router = Router()

router.post("/", OffersController.create)

export default router