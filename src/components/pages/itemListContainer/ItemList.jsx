import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default ItemList;
