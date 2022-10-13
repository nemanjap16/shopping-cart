import { useSelector } from "react-redux";
import { ShoppingBag } from "../icons/Icons";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav className={["navbar", "container"].join(" ")}>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart">
        <ShoppingBag shoppingBag={"shoppingBag"} />
        <div className="amount">{amount}</div>
      </div>
    </nav>
  );
};

export default Navbar;
