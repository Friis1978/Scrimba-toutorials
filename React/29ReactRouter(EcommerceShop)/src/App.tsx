import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Products from "./Products";

function App() {
  return (
    <div>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
