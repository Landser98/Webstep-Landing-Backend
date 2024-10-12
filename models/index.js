import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Comments = sequelize.define('comments', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false  },
    comment: { type: DataTypes.STRING(150), allowNull: false },
    score: { type: DataTypes.INTEGER, allowNull: false  },
    sex: {type: DataTypes.STRING, allowNull: false  },
});

export default { Comments }