interface AUTHORIZE {
  guest: number;
  user: number;
  operator: number;
  admin: number;
  superman: number;
}

interface DATABASE_INFO {
  HOST: string;
  PORT: number;
  USER: string;
  PASSWORD: string;
  DATABASE: string;
}

export { AUTHORIZE, DATABASE_INFO };
