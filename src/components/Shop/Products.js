import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    description: "This  first book I ever bought",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "This second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
