import express from 'express';
import router from './routes/index';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => res.send('Hello Todo App!!'));
app.listen(port, () => console.log(`Todo app listening on port ${port}!`));
