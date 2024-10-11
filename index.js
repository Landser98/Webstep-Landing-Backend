import "dotenv/config"
import express from "express"
import cors from 'cors'
import sequelize from './db.js'
import router from "./routes/index.js"
import './models/index.js'


const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        throw e
    }
}

start()