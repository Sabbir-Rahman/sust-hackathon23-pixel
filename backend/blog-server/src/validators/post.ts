import { object, TypeOf, z } from 'zod'

export const addPostSchema = object({
  body: object({
    title: z.string().optional(),
    isAnonymous: z.boolean().optional(),
    parentPostId: z.string().optional(),
    descryption: z.string(),
    images: z.array(z.string()).optional(),
    coordinates: z.array(z.number()),
    postType: z.string(),
    problemTag: z.string(),
  }),
})

export type AddProblemInput = TypeOf<typeof addPostSchema>

export const viewPostDataWithinRadiusSchema = object({
  body: object({
    radius: z.number(),
    centerCoordinate: z.array(z.number()),
  }),
})

export type viewPostDataWithinRadiusSchemaInput = TypeOf<typeof viewPostDataWithinRadiusSchema>

