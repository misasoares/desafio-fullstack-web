import { useEffect, useState } from "react";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";
import DefaultLayout from "./components/DefaultLayout";
import { useAppDispatch } from "../../store/hooks";
import { getAllEmblems } from "./store/emblemsSlice";
import AllEmblems from "./components/all-emblems/AllEmblems";

export default function Home() {
  const { isTokenValid } = useValidateLogin();
  const dispatch = useAppDispatch();

  const [menu, setMenu] = useState("dashboard");

  function handleChangeMenu(menu: string) {
    //vai definir em um estado qual menu será renderizado
    //no componente abaixo

    setMenu(menu);
  }

  useEffect(() => {
    isTokenValid();
  }, []);

  useEffect(() => {
    dispatch(getAllEmblems());
  }, []);

  return (
    <DefaultLayout handleChangeMenu={handleChangeMenu}>
      {menu === "all-emblems" && <AllEmblems />}
    </DefaultLayout>
  );
}
