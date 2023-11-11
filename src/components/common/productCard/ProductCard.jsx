import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Grid item xs={6} md={3}>
      <Card>
        <CardMedia
          sx={{ height: 100, width: 100, objectFit: "contain" }}
          image={item.img}
          title={`image ${item.title}`}
        />

        <CardContent>
          <Typography button variant="h6" component="div">
            {item.title}
          </Typography>
          <Typography variant="p" color="secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="black">
            $ {item.price} .-
          </Typography>
        </CardContent>
        <CardActions>
          {item.stock > 0 ? (
            <Link to={`/itemDetail/${item.id}`}>
              <Button size="small" variant="contained" color="secondary">
                Ver detalle
              </Button>
            </Link>
          ) : (
            <Button variant="contained" disabled>
              Sin stock
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
