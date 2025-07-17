import mongoose from "mongoose"; //llamado librerias al proyecto (instanciar)
import dotenv from "dotenv"
import cors from "cors"
import express from "express";

dotenv.config(); //Llamar el archivo .env
mongoose.connect(process.env.urlbd) //conectar con mongodb
.then(() =>{
    console.log("Todo jalo chingon con la base de datos")
})

.catch((error) => {
    console.log("No funciono la base de datos", error)
})