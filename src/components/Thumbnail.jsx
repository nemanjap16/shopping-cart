import { ChevronUp, ChevronDown } from "../icons/Icons";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const Thumbnail = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="thumbnail">
      <img src={img} alt={title} height={120} />
      <div className="item-details">
        <div>
          <h4>{title}</h4>
          <h4>${price}</h4>
        </div>
        <div>
          <button
            type="button"
            aria-label="Remove item from cart"
            className="remove-btn"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cart-amount">
        <button
          type="button"
          aria-label="Increase item in cart"
          className="chevron-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp chevron={"chevron"} />
        </button>
        <p>{amount}</p>
        <button
          type="button"
          aria-label="Decrease item in cart"
          className="chevron-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown chevron={"chevron"} />
        </button>
      </div>
    </div>
  );
};

export default Thumbnail;
