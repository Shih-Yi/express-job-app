import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandleMiddleare from './middleware/error-handler.js';

app.get('/', (req, res) => {
  throw new Error('Error!')
  res.send('Welcome!');
});

app.use(notFoundMiddleware);
app.use(errorHandleMiddleare);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
