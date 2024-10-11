import { Sequelize } from "sequelize";

export default new Sequelize(
    process.env.DB_NAME,
    'postgres',
    'root',
    {
        dialect: 'postgres',
    }
)