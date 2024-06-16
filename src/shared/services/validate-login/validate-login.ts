import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { showMessage } from "../../utils/custom-message/slice";

export function useValidateLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const token = localStorage.getItem("access_token");

  function isTokenValid() {
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp && decoded.exp < currentTime) {
        navigate("/auth");
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
        navigate("/");
      }
    } else {
      navigate("/auth");
    }
  }

  return { isTokenValid };
}
