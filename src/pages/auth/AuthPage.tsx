import { useEffect, useState } from "react";
import LosSantosBG from "../..//assets/los_santos.png";
import AuthForm from "./components/AuthForm";
import { TTypeForm } from "./types/auth-form.";

export default function AuthPage() {
  const [mode, setMode] = useState<TTypeForm>("register");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      //TO DO
      //fazer função para verificar se token é valido
    }
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
