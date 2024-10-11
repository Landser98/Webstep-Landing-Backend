import models from "../models/index.js";
import axios from "axios";

class OffersController {
    async create(req, res) {
        try {
            const {fio, phoneNumber, course} = req.body;
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
            await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_OFFERS_BOT_ID}/sendMessage`, {
                text: `ФИО: ${fio} \n Номер: ${phoneNumber} \n Курс: ${course} \n Дата: ${formattedDate}`,
                chat_id: process.env.TELEGRAM_OFFERS_CHANNEL_ID,
            })

            return res.json({body: req.body, success: true})
        } catch (e) {
            console.log(e)
        }
    };
}

export default new OffersController()