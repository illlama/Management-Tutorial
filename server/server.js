const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
const { connect } = require('http2');
const app = express();
const port = process.env.PORT || 5000;
const upload = multer({ dest: './upload' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

app.get('/api/customers', (req, res) => {
  connection.query('SELECT * FROM CUSTOMER;', (err, rows, fields) => {
    res.send(rows);
  });
});
//사용자는 image로 접근을 하는데 우리 서버에서는 upload로 접근하는거임
app.use('/image', express.static('./upload'));
app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null,?,?,?,?,?)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
    console.log(rows);
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
