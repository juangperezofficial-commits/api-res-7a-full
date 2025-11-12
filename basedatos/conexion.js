const mongoose = require('mongoose');


const conexion =  async()=>{

    try{
       await mongoose.connect("mongodb+srv://juan:6XmSECZV2m6LJYbt@prueba.fyja14n.mongodb.net/?appName=prueba")

       console.log("Conectado a la base de datos mi blog!!");
    }catch(error)
    {
        console.log(error);
        throw new Error("No se puede conectar a la  base de datos")

    }

}

module.exports = {
    conexion
}