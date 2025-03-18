import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.js';

// Define  User Model
const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})



export { User};


