import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Comments = sequelize.define('comments', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false  },
    comment: { type: DataTypes.STRING(150), allowNull: false },
    score: { type: DataTypes.INTEGER, allowNull: false  },
    sex: {type: DataTypes.STRING, allowNull: false  },
});

const Consumption = sequelize.define("consumptions", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    reason: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
})

export default { Comments, Consumption }