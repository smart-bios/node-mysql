import { Sequelize } from 'sequelize';



const db = new Sequelize('labinia', 'root', 'Homero23#', {
    host: 'localhost',
    dialect: 'mysql'
})


export default db