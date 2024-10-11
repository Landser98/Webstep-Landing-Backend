import models from "../models/index.js";
import axios from "axios";

class CommentController {
    async create(req, res) {
        try {
            const {name, comment, score} = req.body;
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];

            await models.Comments.create(req.body)
            await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_COMMENTS_BOT_ID}/sendMessage`, {
                text: `Имя: ${name} \n Оценка: ${score} \n Комментарий: ${comment} \n Дата: ${formattedDate}`,
                chat_id: process.env.TELEGRAM_COMMENTS_CHANNEL_ID,
            })

            return res.json({body: req.body, success: true})
        } catch (e) {
            console.log(e)
        }
    };
    async getAll(req, res) {
        try {
            const comments = await models.Comments.findAll()
            return res.json({comments, status:200, error: false})
        } catch (e) {
            return res.json({error: false})
        }
    }
}

export default new CommentController()