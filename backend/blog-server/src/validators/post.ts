import { object, TypeOf, z } from 'zod'

export const addPostSchema = object({
  body: object({
    title: z.string(),
    descryption: z.string(),
    images: z.array(z.string()).optional(),
    coordinates: z.array(z.number()),
    postType: z.string(),
    problemTag: z.string(),
  }),
})

export type AddProblemInput = TypeOf<typeof addPostSchema>

