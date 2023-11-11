import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import { serverTimestamp } from "firebase/firestore";

import { db } from "../../../firebaseConfig";

import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Box, Button, FormControl, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
    <Box display="flex" justifyContent="center" container alignItemms="center">
      {orderId ? (
        <div>
          <div className="fin-compra">
            Gracias por su compra, su N° de comprobante es {orderId}
            <li>
              <Link to="/">Seguir comprando</Link>
            </li>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              type="text"
              onChange={handleChange}
              label="Ingresá tu nombre"
              name="name"
            ></TextField>
            <TextField
              type="text"
              onChange={handleChange}
              label="Ingresá tu teléfono"
              name="phone"
            ></TextField>
            <TextField
              type="text"
              onChange={handleChange}
              label="Ingresá tu mail"
              name="email"
            ></TextField>
            <Button variant="contained" color="secondary" type="submit">
              Comprar
            </Button>
          </FormControl>
        </form>
      )}
    </Box>
  );
};

export default Checkout;
