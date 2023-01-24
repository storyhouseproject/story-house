import bodyParser from 'body-parser';
import express from 'express';
import router from './routes/routes.js';

const PORT = process.env.PORT | 3001;
const app = express();

app.use(bodyParser.json());
app.use(router);

const start = () => {
	app.listen(PORT, () => console.log('Server started'));
};

export default { start };
