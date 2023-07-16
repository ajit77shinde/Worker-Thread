const express  = require('express');
const app = express();

let counter = 0;

app.get('/', (req,res) =>{
    console.log('Get conter method STRTED.');
    counter++;
    console.log('Get conter method END.');

    res.status(200).json({ counter });
});

app.get('/heavy', (req, res) =>{
    console.log('Get HEAVY method STARTED.');

    let total = 0;
    for(let i= 0; i < 10000000000; i++){
        total ++;
    };
    console.log('Get HEAVY method END.');

    res.status(200).json({total});
});

app.listen('4200', () => console.log('server is rnning on port 4200'));