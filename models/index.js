import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Comments = sequelize.define('comments', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    img: {type: DataTypes.STRING },
    comment: { type: DataTypes.STRING },
    score: { type: DataTypes.INTEGER },
    sex: {type: DataTypes.STRING },
});
export default { Comments }