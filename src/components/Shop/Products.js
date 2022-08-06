import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../../store/fetch-slice";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

// const DUMMY_PRODUCTS = [
//   {
//     id: "p1",
//     price: 6,
//     title: "My first Book",
//     description: "This  first book I ever bought",
//   },
//   {
//     id: "p2",
//     price: 5,
//     title: "My Second Book",
//     description: "This second book I ever wrote",
//   },
// ];

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.fetch.products);

  const fetchCartItem = useCallback(async () => {
    dispatch(fetchActions.setIsFetching(true));
    try {
      const response = await fetch(
        "https://react-http-92e78-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          price: data[key].price,
          title: data[key].title,
          description: data[key].description,
        });
      }
      dispatch(fetchActions.setProducts(loadedData));
    } catch (error) {
      dispatch(fetchActions.setIsFetching(false));
      dispatch(fetchActions.setError(error.message));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCartItem();
  }, [fetchCartItem]);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
