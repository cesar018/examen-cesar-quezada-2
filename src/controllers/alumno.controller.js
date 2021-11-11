import { pool } from '../database'
export const readAlumno = async (req, res) => {
    try {
        const response = await pool.query('select a.idalumno, a.nombres, a.apellidos, a.direccion, a.telefono, a.idescuela, e.escuela from alumno a, escuela e where a.idescuela = e.idescuela;');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
export const createAlumno = async (req, res) => {
    try {
        const { nombres, apellidos, direccion, telefono, idescuela } = req.body;
        await pool.query('INSERT INTO alumno(nombres, apellidos, direccion, telefono, idescuela) VALUES ( $1, $2, $3, $4, $5);',
            [nombres, apellidos, direccion, telefono, idescuela]);
        return res.status(200).json(
            `Alumno ${nombres} creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readAlumnoID = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select a.idalumno, a.nombres, a.apellidos, a.direccion, a.telefono, a.idescuela, e.escuela from alumno a, escuela e where a.idescuela = e.idescuela and a.idalumno=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateAlumno = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombres, apellidos, direccion, telefono, idescuela } = req.body;
        const response = await pool.query('UPDATE alumno set nombres = $1, apellidos = $2, direccion = $3, telefono = $4, idescuela = $5 where idalumno = $6',
            [nombres, apellidos, direccion, telefono, idescuela, id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}
export const deleteAlumno = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await pool.query('delete from alumno where idalumno=$1', [id]);
        return res.status(200).json(
            `Alumno ${id} eliminado correctamente...!`);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error...!');
    }
}