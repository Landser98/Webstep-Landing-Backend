import Router from "express"
import ModerationComments from "../controllers/moderationComments.js";
const router = Router()

router.get("/", ModerationComments.getAll)
router.post("/", ModerationComments.create)
router.delete("/:id", ModerationComments.deleteById);



export default router