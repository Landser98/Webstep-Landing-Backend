import Router from "express"
import commentsRouter from "./comments.js";
import offersRouter from "./offers.js";

const router = Router()

router.use("/comments", commentsRouter)
router.use("/offers", offersRouter)

export default router