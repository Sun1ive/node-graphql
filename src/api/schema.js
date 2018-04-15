import { buildSchema } from 'graphql';
import fs from 'fs';
import path from 'path';

const schema = fs.readFileSync(path.resolve(__dirname, 'schema.gql'), 'utf-8');

export default buildSchema(schema);
