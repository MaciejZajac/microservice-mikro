const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto'); // to generate random id
const cors = require('cors');
const { default: Axios } = require('axios');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// storing in memory, no database now

const posts = {};

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await Axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log('change');
  console.log('Listening on 4000');
});
