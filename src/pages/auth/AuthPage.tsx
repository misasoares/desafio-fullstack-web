import { useEffect, useState } from "react";
import LosSantosBG from "../..//assets/los_santos.png";
import AuthForm from "./components/AuthForm";
import { TTypeForm } from "./types/auth-form.";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";

export default function AuthPage() {
  const [mode, setMode] = useState<TTypeForm>("login");

  const { isTokenValid } = useValidateLogin();

  useEffect(() => {
    isTokenValid();
  }, []);

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${LosSantosBG})` }}
      >
        {mode === "register" ? (
          <AuthForm toggleType={setMode} type="register" />
        ) : (
          <AuthForm toggleType={setMode} type="login" />
        )}
      </div>
    </>
  );
}
