import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h2>Mi Tienda</h2>
      </Link>

      <div>
        <Link to="/category/remeras">Remeras</Link>{" "}
        <Link to="/category/gorras">Gorras</Link>{" "}
        <Link to="/category/zapatillas">Zapatillas</Link>
      </div>

      <CartWidget />
    </nav>
  );
}
