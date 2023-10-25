import { z } from 'zod'

export const ImcParamsSchema = z.object({
  peso: z.coerce.number(),
  altura: z.coerce.number(),
})
