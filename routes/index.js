const express = require("express");
const Data = require('../model/data');

const router = express.Router();

router.get('/data', async (req, res) => {
    const data = await Data.find();
    res.send(data);
});

router.post('/data', (req, res) => {
    // Menambah 1 data
    const data1 = {
        cpuname: 'SafeClick_CPU',
        type: 'Windows_NT',
        platform: 'win32',
        release: '10.0.17134',
        remainingRam: 11338039296,
        totalRam: 17063497728
    };
    Data.insertMany(data1, (err, result) => {
        res.json(result);
    });
})

module.exports = router