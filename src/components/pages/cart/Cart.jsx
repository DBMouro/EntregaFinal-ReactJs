import { Button, IconButton } from "@mui/material";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: "No, no eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "warning");
      }
    });
  };

  return (
    <div>
      <div className={"cart-contein"}>
        <h1>Carrito</h1>

        {cart.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <IconButton onClick={() => deleteProductById(product.id)}>
              <DeleteForeverIcon color="secondary" />
            </IconButton>
          </div>
        ))}

        {cart.length > 0 && (
          <div>
            <h2>El total a pagar es : {total}</h2>

            <Link to="/checkout">
              <Button variant="contained" color="secondary">
                Finalizar compra
              </Button>
            </Link>

            <Button
              variant="contained"
              color="secondary"
              onClick={clearCartWithAlert}
            >
              Vaciar Carrito
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
