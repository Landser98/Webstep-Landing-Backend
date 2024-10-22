import Router from "express"
import Consumption from "../controllers/consumption.js"

const router = Router()

router.get("/", Consumption.getAll)
router.post("/", Consumption.create)
router.put("/:id", Consumption.edit )
router.get("/:id", Consumption.getOne)



export default router