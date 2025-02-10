import { DataTypes } from "sequelize";
import db from '../db/conn.js'
import User from './User.js'

const Thought = db.define('Thought', {
    thought: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Thought)
Thought.belongsTo(User)

export default Thought