import models from "../models/index.js";
import axios from "axios";

class CommentController {
    async create(req, res) {
        try {
            const {name, comment, score} = req.body;
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            if (name && comment && score) {
                await models.Comments.create(req.body)
                await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_COMMENTS_BOT_ID}/sendMessage`, {
                    text: `Имя: ${name} \n Оценка: ${score} \n Комментарий: ${comment} \n Дата: ${formattedDate}`,
                    chat_id: process.env.TELEGRAM_COMMENTS_CHANNEL_ID,
                })
                return res.json({body: req.body, success: true})
            }
            return res.json({message: "Пустые данные", success: true})
        } catch (e) {
            return res.status(500).json({message: "Ошибка", success: false})
        }
    };
    async getAll(req, res) {
        try {
            const comments = await models.Comments.findAll()
            return res.status(200).json({comments, status:200, success: true})
        } catch (e) {
            return res.status(500).json({message: "Ошибка", success: false})
        }
    }
}

export default new CommentController()