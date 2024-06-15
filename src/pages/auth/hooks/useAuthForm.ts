import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../../../shared/services/http-client/api";
import "../styles/glassmorphism.css";
import { IAuthFormProps } from "../types/auth-form.";
import {
  TCreateAuthForm,
  authFormShema,
  defaultValues,
} from "../validations/auth-form.schema";

export function useAuthFormHooks({ type, toggleType }: IAuthFormProps) {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(authFormShema),
  });

  async function handleAuthSubmit(data: TCreateAuthForm) {
    if (type === "register") {
      const response = await httpClient.doPost("users", {
        ...data,
        repassword: undefined,
      });

      if (response.success) {
        toggleType("login");
      }
      return;
    }

    if (type === "login") {
      const response = await httpClient.doPost<{ access_token: string }>(
        "login",
        {
          ...data,
          repassword: undefined,
        }
      );

      if (response.success) {
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/");
      }
    }
  }

  return { handleSubmit, register, handleAuthSubmit, errors };
}
