import { ImcParamsSchema } from '@/schemas/imc'
import type { FastifyInstance } from 'fastify'

export async function imcRoutes(app: FastifyInstance) {
  app.get('/:peso/:altura', async (request, reply) => {
    const parsedParams = ImcParamsSchema.safeParse(request.params)

    if (!parsedParams.success) {
      return reply.status(400).send({ message: parsedParams.error.format() })
    }

    const { peso, altura } = parsedParams.data

    const imc = (peso / (altura * altura)).toFixed(3)

    return { imc }
  })
}
