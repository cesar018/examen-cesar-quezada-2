import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllPost=async(req,res)=>{
    const estado='1'
    try {
        const response=await pool.query(`select * from posts`);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readPost=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query(`select * from posts where idpost=$1 and estado='1'`,[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const delPost=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query(`update usuario set estado='0' where idpost=$1`,[id]);
        return res.status(200).json(`Usuario ${id} eliminado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updatePost=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{titulo,descripcion}=req.body;
        await pool.query('update post set titulo=$1,descripcion=$2 where idpost=$3',[titulo,descripcion,id]);
        return res.status(200).json(`Usuario ${id} modificado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createPost=async(req,res)=>{
    try {
        const{titulo,descripcion}=req.body;
        console.log(req.body)
        await pool.query(`insert into post (titulo,descripcion) values ($1,$2)`,[titulo,descripcion]);
        return res.status(200).json(`Usuario ${titulo} creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}