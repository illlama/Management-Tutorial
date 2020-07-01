const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: '홍길동',
      birthday: 19931221,
      gender: 'male',
      job: 'developer',
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: '정하루',
      birthday: 19981211,
      gender: 'female',
      job: 'developer',
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: '판다킴',
      birthday: 19921121,
      gender: 'female',
      job: 'developer',
    },
  ]);
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
