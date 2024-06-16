import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { showMessage } from "../../utils/custom-message/slice";
import { logout, setUser } from "../../../pages/auth/store/userSlice";
import { httpClient } from "../http-client/api";

export function useValidateLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("access_token");

  async function isTokenValid() {
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp && decoded.exp < currentTime) {
        navigate("/auth");
        dispatch(logout());

        dispatch(
          showMessage({
            message: "Acesso expirado, faça login novamente.",
            variant: "info",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          })
        );
      } else {
        const getUser = await httpClient.doGet(`users/${decoded.sub}`);
        if (!getUser.success) return;
        dispatch(setUser(getUser.data));
        navigate("/");
      }
    } else {
      dispatch(logout());
      navigate("/auth");
    }
  }

  return { isTokenValid };
}
