import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "This the first I ever wrote",
  },
  {
    id: "p2",
    price: 16,
    title: "My second book",
    description: "This the second I ever wrote",
  },
  {
    id: "p3",
    price: 64,
    title: "My third book",
    description: "This the third I ever wrote",
  },
  {
    id: "p4",
    price: 13,
    title: "My forth book",
    description: "This the forth I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
