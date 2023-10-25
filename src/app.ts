import { fastify } from 'fastify'
import { imcRoutes } from './routes/imc'

const app = fastify()

app.register(imcRoutes)

export { app }
