import React, { useContext, useState, useEffect } from "react";
import useStyles from "./InfoProd.styles";
import { MyContext } from "../Contexto/MyContext";
import StarRating from "../Stars/Stars";
const InfoProd = () => {
  const classes = useStyles();
  const { idProduct,productsA} = useContext(MyContext);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoEncontrado = productsA.find(
      (producto) => producto.id === idProduct
    );
    setProducto(productoEncontrado);
  }, [idProduct]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={classes.container}>
      <h3>Información del producto</h3>
      <div className={classes.row}>
        <div className={classes.bximg}>
          <img
            className={classes.img}
            src={producto.img}
            alt={producto.Nombre}
          />
        </div>
        <div className={classes.est}>
          <h3 className={classes.nombre}>{producto.Nombre}</h3>
          <h3 className={classes.id}>ID: {producto.id}</h3>
          <p className={classes.Precio}>{producto.Precio} $</p>
          <h3 className={classes.Calificacion}>
            <StarRating rating={producto.Calificacion}></StarRating>{" "}
          </h3>
          <h4 style={{textAlign:'center',margin:0}}>Dimensiones</h4>
          <div className={classes.dimensions}>
            <div className={classes.rowD}>
              <p style={{margin:7}}>Altura:{producto.Altura}</p> <p style={{margin:7}}>Largo:{producto.Largo}</p>
            </div>
            <div className={classes.rowD}>
              <p style={{margin:7}}>Ancho:{producto.Ancho}</p> <p style={{margin:7}}>Peso:{producto.Peso} g</p>
            </div>
          </div>
        </div>
      </div>
        <h3>Descripción</h3>
      <div className={classes.descripcion}>
        <p>{producto.Descripcion}</p>
      </div>
    </div>
  );
};

export default InfoProd;
