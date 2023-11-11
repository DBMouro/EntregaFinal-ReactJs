import { Button } from "@mui/material";
const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div>
      <Button
        color="secondary"
        disabled={false}
        size="small"
        variant="outlined"
        onClick={sumar}
      >
        +
      </Button>
      <h4> {contador} </h4>
      <Button
        color="secondary"
        disabled={false}
        size="small"
        variant="outlined"
        onClick={restar}
      >
        -
      </Button>
      <Button
        color="secondary"
        disabled={false}
        size="small"
        variant="outlined"
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default CounterPresentacional;
