import Router from "express"
import CommentController from "../controllers/comment.js"

const router = Router()

router.get("/", CommentController.getAll)
router.post("/", CommentController.create)



export default router