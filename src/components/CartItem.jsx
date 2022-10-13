import { useSelector } from "react-redux";
import Thumbnail from "./Thumbnail";

const CartItem = () => {
  const { cartItems, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="d-center">
        <h1 className="cart-title">Your Cart</h1>
        <h4 className="faded">Your Cart is empty</h4>
      </section>
    );
  }
  return (
    <section className="display-items">
      <h1 className="cart-title">Your Cart</h1>
      <div className="item">
        {cartItems.map((item) => (
          <Thumbnail {...item} />
        ))}
      </div>
    </section>
  );
};

export default CartItem;
