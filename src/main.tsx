import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index.tsx";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loggerMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

const middleware = applyMiddleware(loggerMiddleware);

const store = createStore(rootReducer, middleware);

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
