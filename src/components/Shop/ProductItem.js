import { cartActions } from "../../store/cart-slice";
import { postActions } from "../../store/post-slice";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  const addItemToCartHandler = async () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
    dispatch(postActions.setIsSubmitting(true));
    fetch("https://react-http-92e78-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      body: JSON.stringify({ id, title, price, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(postActions.setIsSubmitting(false));
    dispatch(postActions.setIsSubmitted(true));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
