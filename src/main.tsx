import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import counter from "./reducers/index.tsx";
import App from "./App.tsx";
import "./index.css";

const store = createStore(counter);

const render = () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREAMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </StrictMode>
  );
};

render();

store.subscribe(render);
