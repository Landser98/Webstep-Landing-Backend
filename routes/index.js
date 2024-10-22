import Router from "express"
import commentsRouter from "./comments.js";
import offersRouter from "./offers.js";
import consumptionsRouter from "./consumptions.js";

const router = Router()

router.use("/comments", commentsRouter)
router.use("/offers", offersRouter)
router.use("/consumptions", consumptionsRouter)

export default router