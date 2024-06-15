import { z } from "zod";

export const defaultValues = {
  name: "",
  nickname: "",
  email: "",
  password: "",
  repassword: "",
};

export const authFormShema = z
  .object({
    name: z.string().optional(),
    nickname: z.string().optional(),
    email: z
      .string({ message: "É necessário adicionar um email." })
      .email({ message: "É necessário adicionar um email válido." }),
    password: z
      .string()
      .min(4, {
        message:
          "É necessário adicionar uma senha com pelo menos 4 caracteres.",
      })
      .max(20, { message: "Excedeu o limite de caracteres." })
      .refine(
        (val) =>
          /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(val),
        {
          message:
            "A senha deve conter pelo menos um número, uma letra maiúscula, e uma letra minúscula.",
        }
      ),
    repassword: z.string().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.name && !value.nickname) {
      ctx.addIssue({
        path: ["nickname"],
        message: "É necessário adicionar um nickname.",
        code: z.ZodIssueCode.custom,
      });
    }
    if (value.name && !value.password) {
      ctx.addIssue({
        path: ["password"],
        message: "É necessário adicionar uma senha.",
        code: z.ZodIssueCode.custom,
      });
    }
    if (value.email && !value.password) {
      ctx.addIssue({
        path: ["password"],
        message: "É necessário adicionar uma senha.",
        code: z.ZodIssueCode.custom,
      });
    }
    if (value.name && value.password && value.password !== value.repassword) {
      ctx.addIssue({
        path: ["repassword"],
        message: "É necessário que as senhas sejam iguais.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type TCreateAuthForm = z.infer<typeof authFormShema>;
