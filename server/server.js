import Express from 'express'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan'
import fs from 'fs'
import path from 'path'
import env from './env'
import renderFullPage from './view'
import router from './controllers'
const nodeServerPort = env.NODE_SERVER_PORT
const app = Express()
//const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'public')));
//app.use(morgan('default',{stream: accessLogStream}))

router('/saas/order/*', app);
app.use((req, res, next) => {
	res.send(renderFullPage());
});

const server = app.listen(nodeServerPort, (req, res, error) => {
	if(error) throw error;
	const { address, port } = server.address();
	console.log(`app listening at http://${address}:${port}`);
});
