import express from 'express';
import fake from './api/todos';
import api from './api';

const app = express();

app.use('/api/v1/', api);

app.listen(8080, () => console.log('app listen', fake));
