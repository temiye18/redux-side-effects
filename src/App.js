import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { uiActions } from "./store/ui-slice";
// import { cartActions } from "./store/cart-slice";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-action-creator";

let isInitial = true;

function App() {
  // const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // setShowNotification(true);
    // const sendCartData = async () => {
    //   try {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "Pending",
    //         title: "Sending...",
    //         message: "Sending cart data!",
    //       })
    //     );
    //     const response = await fetch(
    //       "https://react-http-92e78-default-rtdb.firebaseio.com/cart.json",
    //       {
    //         method: "PUT",
    //         body: JSON.stringify(cart),
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("Sending cart data failed");
    //     }

    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "Success!",
    //         message: "Sent cart data successfully!",
    //       })
    //     );
    //   } catch (error) {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error!",
    //         message: error.message,
    //       })
    //     );
    //   }
    //   const timeout = setTimeout(() => {
    //     setShowNotification(false);
    //   }, 3000);
    //   return () => clearTimeout(timeout);
    // };

    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // useEffect(() => {
  //   setShowNotification(true);
  //   const fetchCartData = async () => {
  //     try {
  //       dispatch(
  //         uiActions.showNotification({
  //           status: "Loading",
  //           title: "Loading...",
  //           message: "Loading cart data!",
  //         })
  //       );
  //       const response = await fetch(
  //         "https://react-http-92e78-default-rtdb.firebaseio.com/cart.json"
  //       );

  //       if (!response.ok) {
  //         throw new Error("loading cart data failed");
  //       }

  //       const cartData = await response.json();
  //       const cartTotalQuantity = cartData.totalQuantity;
  //       const cartItems = Object.values(cartData.items);

  //       const loadedData = {
  //         items: cartItems,
  //         totalQuantity: cartTotalQuantity,
  //       };

  //       dispatch(cartActions.fetchItemToCart(loadedData));
  //       dispatch(
  //         uiActions.showNotification({
  //           status: "success",
  //           title: "Success!",
  //           message: "Cart data loaded successfully!",
  //         })
  //       );
  //     } catch (error) {
  //       dispatch(
  //         uiActions.showNotification({
  //           status: "error",
  //           title: "Error!",
  //           message: error.message,
  //         })
  //       );
  //       console.log(error);
  //     }
  //     const timeout = setTimeout(() => {
  //       setShowNotification(false);
  //     }, 3000);
  //     return () => clearTimeout(timeout);
  //   };

  //   fetchCartData();
  // }, [dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
