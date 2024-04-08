// en db.ts
import 'dotenv/config'
import pkg from 'pg'

const { Pool } = pkg

interface Config {
  user: string | undefined;
  password: string | undefined;
  host: string | undefined;
  port: number | undefined;
  database: string | undefined;
  allowExistOnIdle: boolean;
}

const config: Config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port:  parseInt(process.env.DB_PORT ?? '5432', 10),
  database: process.env.PG_DATABASE,
  allowExistOnIdle: true
}

const pool = new Pool(config)

const genericSqlQuery = (query: string, values: any[] = []): Promise<any> => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: '[ERROR]', code, message }
    throw error
  })

export default genericSqlQuery

