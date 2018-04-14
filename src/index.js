import express from 'express';
import fake from './api/todos';


const app = express();

app.listen(8080, () => console.log('app listen', fake));
