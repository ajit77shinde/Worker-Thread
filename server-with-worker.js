const express = require('express');
const app = express();
const { Worker } = require('worker_threads');

let counter = 0;

app.get('/', (req, res) => {
    console.log('Get conter method STRTED.');
    counter++;
    console.log('Get conter method END.');

    res.status(200).json({ counter });
});

app.get('/heavy', (req, res) => {
    console.log('Get HEAVY method STARTED.');
    const worker = new Worker('./worker.js');
    worker.on('message', (data) =>{
        console.log('Get HEAVY method END.');
        res.status(200).json({total: data});
    })
    // let total = 0;
    // for (let i = 0; i < 10000000000; i++) {
    //     total++;
    // };

    // res.status(200).json({ total });
});

app.listen('4200', () => console.log('server-with-worker-thread is rnning on port 4200'));