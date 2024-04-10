import bcrypt from 'bcryptjs'

export const encrypt = (password: string) => bcrypt.hashSync(password)

export const compare = (password: string, pass: string) => bcrypt.compare(password, pass)