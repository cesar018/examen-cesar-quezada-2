import { Router } from 'express'
const router = Router();
import * as AlumnoCtrl from '../controllers/alumno.controller'
    router.get('/listar', AlumnoCtrl.readAlumno); 
    router.get('/listarID/:id', AlumnoCtrl.readAlumnoID);
    router.post('/create/', AlumnoCtrl.createAlumno); 
    router.delete('/delete/:id', AlumnoCtrl.deleteAlumno); 
    router.put('/update/:id', AlumnoCtrl.updateAlumno); 

export default router;