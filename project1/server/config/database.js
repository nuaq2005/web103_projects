import pg from 'pg'

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}

console.log({
  PGDATABASE: process.env.PGDATABASE,
  PGHOST: process.env.PGHOST,
  PGPORT: process.env.PGPORT,
  PGUSER: process.env.PGUSER,
  PGPASSWORD: process.env.PGPASSWORD ? 'loaded' : 'missing'
});


export const pool = new pg.Pool(config)

// quick test at the bottom of database.js temporarily
pool.query('SELECT 1', (err, res) => {
  if (err) console.error('DB connection failed:', err.message);
  else console.log('DB connection OK');
});
