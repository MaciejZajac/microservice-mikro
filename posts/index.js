const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto'); // to generate random id
const cors = require('cors');
const { default: Axios } = require('axios');
const app = express();
app.use(bodyParser.json());

// storing in memory, no database now

const posts = {};

app.use(cors());
app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await Axios.post('http://localhost:4005/event', {
    type: 'PostCreated',
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
