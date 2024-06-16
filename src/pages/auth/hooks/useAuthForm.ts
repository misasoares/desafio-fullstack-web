import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { httpClient } from "../../../shared/services/http-client/api";
import "../styles/glassmorphism.css";
import { IAuthFormProps, LoginResponse } from "../types/auth-form.";
import {
  TCreateAuthForm,
  authFormShema,
  defaultValues,
} from "../validations/auth-form.schema";
import { useAppDispatch } from "../../../store/hooks";
import { showMessage } from "../../../shared/utils/custom-message/slice";
import { setUser } from "../store/userSlice";

export function useAuthFormHooks({ type, toggleType }: IAuthFormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
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
        reset();
        dispatch(
          showMessage({
            message: response.data.message,
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          })
        );
        toggleType("login");
      }
      return;
    }

    if (type === "login") {
      const response = await httpClient.doPost<LoginResponse>("login", {
        ...data,
        repassword: undefined,
      });

      if (response.success) {
        localStorage.setItem("access_token", response.data.access_token);

        const { data } = response;

        const user = {
          id: data.id,
          email: data.email,
          name: data.name,
          emblems: data.emblems,
        };
        dispatch(setUser(user));

        navigate("/");
        dispatch(
          showMessage({
            message: `Seja bem vindo, ${response.data.name}`,
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          })
        );
      }

      if (!response.success) {
        dispatch(
          showMessage({
            message: response.message,
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          })
        );
      }
    }
  }

  return { handleSubmit, register, handleAuthSubmit, errors };
}
