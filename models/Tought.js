import { DataTypes } from "sequelize";
import db from '../db/conn.js'
import User from './User.js'

const Tought = db.define('Tought', {
    tought: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Tought)
Tought.belongsTo(User)

export default Tought