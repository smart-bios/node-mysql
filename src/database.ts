import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

const host: string = env.get('HOST').required().asString();
const username: string = env.get('USERNAME').required().asString();
const password: string = env.get('PASSWORD').required().asString();
const database: string = env.get('DATABASE').required().asString();

const db = new Sequelize({
    dialect: 'mysql',
    host,
    username,
    password,
    database,
    pool: {
        max: 5,
        min: 0,
        idle: 10 * 1000,
    }

})


export default db