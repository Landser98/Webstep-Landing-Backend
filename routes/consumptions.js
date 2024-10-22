import Router from "express"
import Consumption from "../controllers/consumption.js"

const router = Router()

router.get("/", Consumption.getAll)
router.post("/", Consumption.create)



export default router