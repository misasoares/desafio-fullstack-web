import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store/store";
import Message from "./shared/utils/custom-message/components/Message";
import { ThemeProvider } from "@mui/material";
import theme from "./configs/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRoutes />
        <Message />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
