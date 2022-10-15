import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      {isOpen && <Modal />}

      <header className="header">
        <Navbar />
      </header>
      <main className={["app", "container"].join(" ")}>
        <div className="cart">
          <CartItem />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
