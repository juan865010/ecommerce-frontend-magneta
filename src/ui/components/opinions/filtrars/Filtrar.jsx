import React, { useState } from "react";
import useStyles from "./Filtral_style";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { Slider} from "@mui/material";

const Filtra = () => {
  const classes = useStyles();
  const [categorias, setCategorias] = useState({
    cliente: false,
    producto: false,
    todos: true
  });

  const handleCategoriaChange = (event) => {
    const { name, checked } = event.target;
    setCategorias((prevCategorias) => ({
      ...prevCategorias,
      [name]: checked
    }));
  };

  const [fecha, setFecha] = useState("");
  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };
  const [quantity, setQuantity] = useState([0, 100]);
  const handleSliderChange = (event, newValue) => {
    setQuantity(newValue);
  };
  
  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h4">Filtrar</Typography>
      <div className={classes.filter}>
        <>
        <hr />
        <tipografy variant="h4">Categoria Product</tipografy>
        <FormControl >
          <FormGroup >
            <FormControlLabel 
              control={
                <Checkbox 
                  checked={categorias.todos}
                  onChange={handleCategoriaChange}
                  name="todos"
                />
              }
              label="Todos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={categorias.cliente}
                  onChange={handleCategoriaChange}
                  name="cliente"
                />
              }
              label="Cliente"
            />
            <FormControlLabel
              control={
                <Checkbox 
                  checked={categorias.producto}
                  onChange={handleCategoriaChange}
                  name="producto"
                />
              }
              label="Producto"
            />
          </FormGroup>
        </FormControl>
        <div>
          <tipografy variant="h4">Seleccionar fecha</tipografy>
        </div>
        <hr />
        <diV>
        <tipografy variant="h4">Materiles Product</tipografy>
          <FormControl >
            <FormGroup >
              <FormControlLabel 
                control={
                  <Checkbox 
                    checked={categorias.todos}
                    onChange={handleCategoriaChange}
                    name="metals"
                  />
                }
                label="Metals"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={categorias.cliente}
                    onChange={handleCategoriaChange}
                    name="glass"
                  />
                }
                label="Glass"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={categorias.producto}
                    onChange={handleCategoriaChange}
                    name="plastic"
                  />
                }
                label="Plastic"
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={categorias.producto}
                    onChange={handleCategoriaChange}
                    name="minerals"
                  />
                }
                label="Minerals"
              />
            </FormGroup>
          </FormControl>    
        </diV>
        <div>
          <hr />
          <tipografy variant="h4">Cantidad</tipografy>
          <Slider
           value={quantity}
           onChange={handleSliderChange}
           valueLabelDisplay="auto"
           aria-labelledby="quantity-slider"
           min={0}
           max={5000}
         />
        </div>
        </>   
      </div>
    </div>
  );
};

export default Filtra; 
