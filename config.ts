import * as TYPES from './src/public/types/config';

const authorize: TYPES.AUTHORIZE = {
  guest: -1,
  user: 1,
  operator: 2,
  admin: 10,
  superman: 999,
};

const database: { [key: string]: TYPES.DATABASE_INFO } = {
  local: {
    HOST: 'localhost',
    PORT: 38496,
    USER: 'root',
    PASSWORD: '1q2w3e4r',
    DATABASE: 'fl',
  },
};

export default {
  AUTHORIZE: authorize,
  DATABASE: database,
};
