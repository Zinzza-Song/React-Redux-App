import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import rootReducer from "./reducers/index.tsx";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const render = () =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <App
          onIncrement={() => store.dispatch({ type: "INCREAMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </StrictMode>
  );

render();

store.subscribe(render);
