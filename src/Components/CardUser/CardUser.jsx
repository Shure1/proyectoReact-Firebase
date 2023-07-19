import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css";
import {Link} from 'react-router-dom'
import { CelularContext } from '../../context/CelularContext';
const CardUser = ({data})=> {
  const {Año, Marca, Valor, img, id} = data

  const [items, setItems] = useContext(CelularContext);

  const handleAddToCart = () => {
    
    // Buscar el celular en el carrito por su id
    const celularEnCarrito = items.find((item) => item.id === id);

    if (celularEnCarrito) {
      
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      
      setItems((prevItems) => [...prevItems, { ...data, cantidad: 1 }]);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/detail/${id}`}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200px"
          width="100%"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Año}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Valor}
          </Typography>
        </CardContent>
      </Link>
      
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>Agregar al Carrito</Button>
      </CardActions>
    </Card>
  );
}

export default CardUser;