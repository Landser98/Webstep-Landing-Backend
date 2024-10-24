import Router from "express"
import commentsRouter from "./comments.js";
import offersRouter from "./offers.js";
import consumptionsRouter from "./consumptions.js";
import moderationCommentsController from "./moderationComments.js";
const router = Router()

router.use("/comments", commentsRouter)
router.use("/offers", offersRouter)
router.use("/consumptions", consumptionsRouter)
router.use("/moderation-comments", moderationCommentsController)

export default router