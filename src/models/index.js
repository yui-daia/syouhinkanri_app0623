// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Arrival, Home } = initSchema(schema);

export {
  Arrival,
  Home
};