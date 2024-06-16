import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store/store";
import Message from "./shared/utils/custom-message/components/Message";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
      <Message />
    </Provider>
  );
}

export default App;
