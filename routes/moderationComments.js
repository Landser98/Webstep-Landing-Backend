import Router from "express"
import ModerationComments from "../controllers/moderationComments.js";
const router = Router()

router.get("/", ModerationComments.getAll)
router.post("/", ModerationComments.create)



export default router