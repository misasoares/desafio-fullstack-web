import { Button, TextField, Typography } from "@mui/material";
import { useAuthFormHooks } from "../hooks/useAuthForm";
import "../styles/glassmorphism.css";
import { IAuthFormProps } from "../types/auth-form.";

export default function AuthForm({ type, toggleType }: IAuthFormProps) {
  const { handleSubmit, register, handleAuthSubmit, errors } = useAuthFormHooks(
    {
      type,
      toggleType,
    }
  );

  return (
    <form
      onSubmit={handleSubmit(handleAuthSubmit)}
      className="border-white border-2 w-2/6 rounded-md flex flex-col gap-5 p-10 justify-center items-center glass-fx"
    >
      <Typography
        className=" text-pink-600"
        fontWeight="bold"
        variant="h4"
        component="h1"
      >
        {type === "login" ? "Login" : "Registrar"}
      </Typography>
      {type === "register" && (
        <>
          <TextField
            {...register("name")}
            label="Digite seu nome"
            variant="standard"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            {...register("nickname")}
            label="Crie um nickname"
            variant="standard"
            fullWidth
            error={!!errors.nickname}
            helperText={errors.nickname?.message}
          />
        </>
      )}
      <TextField
        {...register("email")}
        label="Digite seu email"
        variant="standard"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("password")}
        label="Crie uma senha"
        variant="standard"
        type="password"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      {type === "register" && (
        <TextField
          {...register("repassword")}
          label="Digite sua senha novamente"
          variant="standard"
          type="password"
          fullWidth
          error={!!errors.repassword}
          helperText={errors.repassword?.message}
        />
      )}
      {type === "register" && (
        <Typography>
          Já tem conta?{" "}
          <span>
            <u
              className="cursor-pointer  text-yellow-500"
              onClick={() => toggleType("login")}
            >
              Login
            </u>
          </span>
        </Typography>
      )}
      {type === "login" && (
        <Typography>
          Não tem conta?{" "}
          <span>
            <u
              className="cursor-pointer text-yellow-500"
              onClick={() => toggleType("register")}
            >
              Registre-se
            </u>
          </span>
        </Typography>
      )}
      <Button type="submit" variant="contained">
        {type === "login" ? "Entrar" : "Registrar"}
      </Button>
    </form>
  );
}
