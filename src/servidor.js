const express = require('express');
const app = express();
// const morgan = require('morgan');
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(morgan('deav'));
app.use(cors());
//Rutes
app.use(require('./routes/pacientes'));
//Staring server

app.listen(app.get('port'),3000,()=>{
    console.log('Server on port', app.get('port'));
})