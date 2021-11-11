import express from 'express';
import morgan from 'morgan';
import alumnoRoutes from './routers/alumno.routes';
const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.get('/',function(req,res,next){
    res.send('Bienvenido a Sistema de Alumnos ....');
});
app.use('/alumno',alumnoRoutes);
export default app;