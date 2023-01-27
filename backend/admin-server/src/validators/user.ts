import { object, TypeOf, z } from 'zod'

export const addUserSchema = object({
  body: object({
    name: z.string(),
    password: z.string(),
    email: z.string(),
  }),
})

export type AddUserInput = TypeOf<typeof addUserSchema>
