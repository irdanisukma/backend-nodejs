const express = require('express')
const cors = require('cors')
const app = express()
const port =82;
app.use(express.json());
app.use(cors())


let namajs = []
let keluhjs = []

app.post('/pengaduan', (req, res) => {
  const namacust = {
    antrian: namajs.length+1,
    nama: req.body.nama,
  };
  namajs.push(namacust);
  res.send(namacust);
});

app.post('/keluhan', (req, res) => {
  const keluhcust = {
    antrian: keluhjs.length+1,
    keluhan: req.body.keluhan,
  };
  keluhjs.push(keluhcust);
  res.send(keluhcust);
});


app.get('/namapengadu', (req, res) => {
  res.send({namajs});
});

app.get('/keluhpengadu', (req, res) => {
  res.send({keluhjs});
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://127.1.0.1:${port}`)
  });