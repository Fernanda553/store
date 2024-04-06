import 'dotenv/config'
import express from 'express'
import cors from 'cors'
 import forRoutes from './middlewares/index'
 import * as routes from './routes/index.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(forRoutes)

app.use(routes.productos)

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Esta ruta no existe 🧐' }))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

export default app
