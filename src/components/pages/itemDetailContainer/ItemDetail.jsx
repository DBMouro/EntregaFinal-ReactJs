import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  showCounter,
}) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={productSelected.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2 style={{ fontFamily: "apple-system" }}>
            <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
            {productSelected.title}
          </h2>
          <h2 style={{ fontFamily: "apple-system" }}>
            <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
            {productSelected.description}
          </h2>
          <h2 style={{ fontFamily: "apple-system" }}>
            <span style={{ fontSize: "23px" }}>Precio:</span> $
            {productSelected.price}.-
          </h2>
        </div>
      </div>

      <div className="cantidad-compra">
        {initial && <h4>Ya tienes {initial} unidades</h4>}
        {showCounter ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CounterContainer
              stock={productSelected.stock}
              onAdd={onAdd}
              initial={initial}
            />
          </div>
        ) : (
          <Link to="/cart">
            <h3>Terminar Compra</h3>
          </Link>
        )}

        <div>
          <Link to="/">
            <h2>Ir al Inicio</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
