import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'reflect-metadata'
import  userRoutes from './routes/user.routes'
import {createConnection} from 'typeorm'
 
 
const app = express()
createConnection();
 
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
 
// routes
app.use(userRoutes)
 
app.listen(3000)
console.log('Server on port', 3000)
