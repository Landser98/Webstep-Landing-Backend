import models from "../models/index.js";

class Consumption {
    async create(req, res) {
        try {
            const {reason, amount, status, date} = req.body;
            if (!reason && !amount && !date) {
                return res.json({message: "Пустые данные", success: true})
            }
            await models.Consumption.create({reason, amount, status, date})
            return res.json({body: req.body, success: true})
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Ошибка", success: false})
        }
    };
    async getAll(req, res) {
        try {
            const consumptions = await models.Consumption.findAll()
            if (!consumptions) {
                return res.status(200).json({body: {message: "Пусто"} , success: true})

            }
            const totalSum = consumptions.reduce((acc, cur) => acc + cur.amount, 0);
            return res.status(200).json({consumptions, totalSum, success: true})
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Ошибка", success: true})
        }
    };
    async edit(req, res) {
        try {
            const { id } = req.params;
            const { reason, amount, status, date } = req.body;
            if (!reason && !amount && !date) {
                return res.status(400).json({ message: "Нет данных для обновления", success: false });
            }
            const consumption = await models.Consumption.findByPk(id);
            if (!consumption) {
                return res.status(404).json({ message: "Запись не найдена", success: false });
            }

            await consumption.update({ reason, amount, status, date });

            return res.status(200).json({ message: "Запись обновлена", success: true, updatedData: consumption });
        } catch (e) {
            return res.status(500).json({ message: "Ошибка при обновлении", success: false });
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const consumption = await models.Consumption.findByPk(id);

            if (!consumption) {
                return res.status(404).json({ message: "Запись не найдена", success: false });
            }

            return res.status(200).json({ success: true, consumption });
        } catch (e) {
            return res.status(500).json({ message: "Ошибка", success: false });
        }

    }

}

export default new Consumption();