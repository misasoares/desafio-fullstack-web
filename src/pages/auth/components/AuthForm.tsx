import { Button, TextField, Typography } from "@mui/material";
import { useAuthFormHooks } from "../hooks/useAuthForm";
import "../styles/glassmorphism.css";
import { IAuthFormProps } from "../types/auth-form.";

// const authFormShema = z.object({
//   name: z.string().optional(),
//   nickname: z.string().optional(),
//   email: z.string().email(),
//   password: z.string(),
// });

export default function AuthForm({ type, toggleType }: IAuthFormProps) {
  const { handleSubmit, register, handleAuthSubmit } = useAuthFormHooks({
    type,
    toggleType,
  });

  return (
    <form
      onSubmit={handleSubmit(handleAuthSubmit)}
      className="border-white border-2 w-2/6 rounded-md flex flex-col gap-5 p-10 justify-center items-center glass-fx"
    >
      <Typography variant="h4" component="h1">
        {type === "login" ? "Entrar" : "Registrar"}
      </Typography>
      {type === "register" && (
        <>
          <TextField
            {...register("name")}
            label="Digite seu nome"
            variant="standard"
            fullWidth
          />
          <TextField
            {...register("nickname")}
            label="Crie um nickname"
            variant="standard"
            fullWidth
          />
        </>
      )}
      <TextField
        {...register("email")}
        label="Digite seu email"
        variant="standard"
        fullWidth
      />
      <TextField
        {...register("password")}
        label="Crie uma senha"
        variant="standard"
        type="password"
        fullWidth
      />
      {type === "register" && (
        <TextField
          {...register("repassword")}
          label="Digite sua senha novamente"
          variant="standard"
          type="password"
          fullWidth
        />
      )}
      <Button type="submit" variant="contained">
        Registrar-se
      </Button>
    </form>
  );
}
