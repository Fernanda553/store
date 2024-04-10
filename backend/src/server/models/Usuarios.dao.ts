import 'dotenv/config'
import genericSqlQuery from '../databases/db'

export const createUser = async (name: string, email: string, password: string) => await genericSqlQuery('INSERT INTO usuarios (id, name, email, password) VALUES (DEFAULT ,$1, $2, $3) RETURNING *;', [name, email, password])

export const verifyUser = async (email: string) => await genericSqlQuery('SELECT * FROM usuarios WHERE email = $1;', [email])

export const getUser = async (email: string) => await genericSqlQuery('SELECT * FROM usuarios WHERE email = $1 ;', [email])