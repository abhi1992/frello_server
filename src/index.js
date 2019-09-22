import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/index';
import dbConfig from './config/database.confg';

const app = express();
const port = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(router);

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Successfully connected to the database');
}).catch((err) => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.listen(port, () => console.log(`Todo app listening on port ${port}!`));
