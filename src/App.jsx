import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import "./App.css";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <main className={["app", "container"].join(" ")}>
        <div className="cart">
          <CartItem />
          {/* <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              aria-label="increment by amount"
              onClick={() => dispatch(incrementByAmount(5))}
            >
              Increment by amount
            </button>
          </div> */}
        </div>
      </main>
      <footer className="footer">
        <hr />
        <h2>total</h2>
      </footer>
    </div>
  );
}

export default App;
