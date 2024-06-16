import { useEffect, useState } from "react";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";
import DefaultLayout from "./components/DefaultLayout";

export default function Home() {
  const [value, setValue] = useState(0);

  const { isTokenValid } = useValidateLogin();

  useEffect(() => {
    isTokenValid();
  }, []);

  return (
    <DefaultLayout>
      <h1>oi</h1>
    </DefaultLayout>
  );
}
