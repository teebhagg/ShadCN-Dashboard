import { Pool } from 'pg';

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false
//     },
// })

const pool = new Pool({
    user: 'mac',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
  })
  