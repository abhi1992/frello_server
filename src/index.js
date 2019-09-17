import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello Todo App!!'));
app.listen(port, () => console.log(`Todo app listening on port ${port}!`));
