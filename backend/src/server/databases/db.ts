// en db.ts
import 'dotenv/config'
import pkg from 'pg'
import { QueryResult } from 'pg'

const { Pool } = pkg

interface Config {
  user: string | undefined;
  password: string | undefined;
  host: string | undefined;
  port: string | undefined;
  database: string | undefined;
  allowExistOnIdle: boolean;
}


const config: Config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  allowExistOnIdle: true
}

const pool = new Pool(config)

const genericSqlQuery = (query: string, values: any[] = []): Promise<QueryResult> => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: '[ERROR]', code, message }
    throw error
  })

export default genericSqlQuery
