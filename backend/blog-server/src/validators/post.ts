import { object, TypeOf, z } from 'zod'

export const addUserSchema = object({
  body: object({
    title: z.string(),
    descryption: z.string(),
    images: z.array(z.string()).optional(),
    coordinates: z.array(z.string()),
    postType: z.string(),
    problemTag: z.string()
  }),
})

export type AddUserInput = TypeOf<typeof addUserSchema>

export const addEmailSchema = object({
  body: object({
    email: z.string(),
    password: z.string(),
  }),
})

export type AddLoginInput = TypeOf<typeof addEmailSchema>
