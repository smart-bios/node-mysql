import  { DataTypes } from 'sequelize'
import db from '../database';

const Specie = db.define('specie',{
    name: {
        type: DataTypes.STRING
    },

    scientific_name: {
        type: DataTypes.STRING
    },

    short_name: {
        type: DataTypes.STRING
    },

    alias: {
        type: DataTypes.BOOLEAN
    }

})

export default Specie