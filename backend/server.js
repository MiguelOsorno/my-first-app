const express = require('express');

const app = express();

app.get('/', ( req, res ) => {
    res.json({
        ok: true,
        message: 'Hola mundo!!!'
    });
});

app.listen(3000, () => {
    console.log('Servidor listo:', 3000);
});