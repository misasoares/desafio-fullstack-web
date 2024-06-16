import { useEffect, useState } from "react";
import { useValidateLogin } from "../../shared/services/validate-login/validate-login";
import DefaultLayout from "./components/DefaultLayout";
import { useAppDispatch } from "../../store/hooks";
import { getAllEmblems } from "./store/emblemsSlice";
import AllEmblems from "./components/all-emblems/AllEmblems";
import MyEmblems from "./components/my-emblems/MyEmblems";

export default function Home() {
  const { isTokenValid } = useValidateLogin();
  const dispatch = useAppDispatch();

  const [menu, setMenu] = useState("emblems");

  function handleChangeMenu(menu: string) {
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
      {menu === "emblems" && <MyEmblems />}
      {menu === "all-emblems" && <AllEmblems />}
    </DefaultLayout>
  );
}
