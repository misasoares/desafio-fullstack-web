import { useEffect } from "react";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";

export default function Home() {
  const { isTokenValid } = useValidateLogin();

  useEffect(() => {
    isTokenValid();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <button>test</button>
    </>
  );
}
