import { useEffect, useState } from "react";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";
import DefaultLayout from "./components/DefaultLayout";

export default function Home() {
  const { isTokenValid } = useValidateLogin();

  const [menu, setMenu] = useState("dashboard");

  function handleChangeMenu(menu: string) {
    //vai definir em um estado qual menu será renderizado
    //no componente abaixo

    setMenu(menu);
  }

  useEffect(() => {
    isTokenValid();
  }, []);

  return (
    <DefaultLayout handleChangeMenu={handleChangeMenu}>
      <h1>{menu}</h1>
    </DefaultLayout>
  );
}
