import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllUsers=async(req,res)=>{
    const estado='1'
    try {
        const response=await pool.query(`select * from usuario where estado='1'`);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query(`select * from usuario where idusuario=$1 and estado='1'`,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query(`update usuario set estado='0' where idusuario=$1`,[id]);
        return res.status(200).json(`Usuario ${id} eliminado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{username,password}=req.body;
        const passwordEncrypt=await helpers.encryptPassword(password);
        await pool.query('update usuario set username=$1,password=$2 where idusuario=$3',[username,passwordEncrypt,id]);
        return res.status(200).json(`Usuario ${id} modificado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createUser=async(req,res)=>{
    try {
        const{username,password}=req.body;
        console.log(req.body)
        const passwordEncrypt=await helpers.encryptPassword(password);
        await pool.query(`insert into usuario (username,password,estado) values ($1,$2,'1')`,[username,passwordEncrypt]);
        return res.status(200).json(`Usuario ${username} creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}