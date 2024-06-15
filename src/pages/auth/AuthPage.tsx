import { useState } from "react";
import LosSantosBG from "../..//assets/los_santos.png";
import AuthForm from "./components/AuthForm";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register");
  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${LosSantosBG})` }}
      >
        {mode === "register" ? (
          <AuthForm type="register" />
        ) : (
          <AuthForm type="login" />
        )}
      </div>
    </>
  );
}
