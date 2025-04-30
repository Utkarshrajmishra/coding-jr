import {z} from "zod"

export const LoginSchema=z.object({
    email:z.string().email({message:'Invalid Email'}),
    password:z.string().min(6,{message:'Password must be >= 8 digits'}).max(6,{message:'Password must be >= 8 digits'})
})

export type LoginSchemaType = z.infer<typeof LoginSchema>