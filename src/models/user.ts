import  { DataTypes } from 'sequelize'
import db from '../database';

const User = db.define('user',{
    username: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    },

    password: {
        type: DataTypes.STRING
    },

    status: {
        type: DataTypes.BOOLEAN
    }

})

export default User