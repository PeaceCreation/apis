import { Sequelize} from 'sequelize';
// create squelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_NAME
}) ;


// create initDB function
export async function initDB(){
    await sequelize.sync();
    // try 
    try{
        console.log('Daabase Creatd Successfully');
    }
    catch(err){
        console.log('Failed to Create Database')
    }
}


export  default sequelize;