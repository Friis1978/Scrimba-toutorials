import { Link } from "react-router-dom";
import productsData from "./ProductsData";

function Products() {
  const products = productsData.map((prod) => {
    return (
      <div key={prod.id} className="product">
        <Link to={`/products/${prod.id}`}>
          <h3>{prod.name}</h3>
          <p>{prod.price}</p>
        </Link>
      </div>
    );
  });

  return (
    <section className="page">
      <h1>Products Page</h1>
      <div className="productslist">{products}</div>
    </section>
  );
}

export default Products;
