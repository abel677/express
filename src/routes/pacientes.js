const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const mysqlConnection = require('../database');

//mostrar los datos
router.get('/pacientes',(req,res)=>{
    mysqlConnection.query('select *from pacientes',(err,rows,flieds)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//selecciona un paciente por el id
router.get('/pacientes/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('select *from pacientes WHERE id = ?',[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
           console.log(err);
        }
    });
});

//agrega los datos
router.post('/pacientes',(req,res)=>{
    const { id, nombre, apellido, cedula, telefono, direccion, correo, estado } = req.body;
    const query = `
        call registraPaciente(?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[id,nombre,apellido,cedula,telefono,direccion,correo,estado],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Paciente registrado'});
        }else{
            console.log(err);
        }
    });
});
//actualiza los datos
router.put('/pacientes/:id',(req, res)=>{
    const { nombre,apellido,cedula,telefono,direccion,correo,estado } = req.body;
    const { id } = req.params;
    const query = `call agregarPaciente(?,?,?,?,?,?,?,?)`;
    mysqlConnection.query(query,[id,nombre,apellido,cedula,telefono,direccion,correo,estado],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Paciente registrado'});
        }else{
            console.log(err);
        }
    });
});
//elimina los datos
router.delete('/pacientes/:id',(req,res)=>{
    const { id } = req.params;
    mysqlConnection.query('delete from pacientes where id=?',[id],(err,rows,fields)=>{
        if(!err){
            res.json({Status:'Paciente eliminado'});
        }else{
            console.log(err);
        }
    });

})
module.exports = router;
