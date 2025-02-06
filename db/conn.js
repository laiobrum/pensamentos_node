import { Sequelize } from "sequelize"

const sequelize = new Sequelize('thoughtsproject', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Connected to database')    
} catch (error) {
    console.log('Não foi possível conectar: ', err)
}

export default sequelize
