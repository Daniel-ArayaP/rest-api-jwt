import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.TOKEN_SECRET);

import app from './app';
import './database';

function init() {
    app.listen(app.get('port'));
    console.log('ok, Server on port', 3000);
};

init();
