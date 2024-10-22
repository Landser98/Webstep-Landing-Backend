import models from "../models/index.js";

class Consumption {
    async create(req, res) {
        try {
            const {reason, amount, status, date} = req.body;
            if (reason && amount && status && date) {
                await models.Consumption.create({reason, amount, status, date})
                return res.json({body: req.body, success: true})
            }
            return res.json({message: "Пустые данные", success: true})
        }catch (e) {
            console.log(e)
            return res.status(500).json({message: "Ошибка", success: false})
        }
    };
    async getAll(req, res) {
        try {
            const consumptions = await models.Consumption.findAll()
            if (consumptions.length) {
                const totalSum = consumptions.reduce((acc, cur) => acc + cur.amount, 0);

                return res.status(200).json({consumptions, totalSum, success: true})
            }
            return res.status(200).json({body: {message: "Пусто"} , success: true})
        }catch (e) {
            console.log(e)
            return res.status(500).json({message: "Ошибка", success: true})
        }
    }
}

export default new Consumption();