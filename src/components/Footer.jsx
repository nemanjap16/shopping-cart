import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

const Footer = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <footer className="footer">
      <hr />
      <div className="total">
        <h3>total:</h3>
        <h2>$ {total.toFixed(2)}</h2>
      </div>
      <button
        type="button"
        aria-label="Clear cart"
        className="clear-cart"
        onClick={() => dispatch(openModal())}
      >
        Clear Cart
      </button>
    </footer>
  );
};

export default Footer;
