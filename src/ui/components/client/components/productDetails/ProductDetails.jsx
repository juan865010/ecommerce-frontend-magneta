import React, { useState, useEffect, useContext } from 'react';
import useStyles from './ProductDetails.styles';
import Estrellas from '../img/estrellas.png';
import bolso from '../img/img3.png';
import Corazon from '../img/corazon.png';
import opi from '../img/estre.png'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { dataContext } from '../context/DataContext';
import CartItemCounter from '../cartContent/CartItemCounter';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {buyProducts} = useContext(dataContext);

  useEffect(() => {
    if (id) {
      axios("/data.json")
        .then((res) => {
          const productId = parseInt(id);
          const selectedProduct = res.data.find((product) => product.id === productId);
          setProduct(selectedProduct);
        })
        .catch((error) => {
          console.log("Error fetching product data:", error);
        });
    }
  }, [id]);

  const classes = useStyles();
  

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div className={classes.container} style={{ display: 'flex' }}>
        <div style={{ flex: '60%' }} className="row">
          <div className={classes.container2} style={{ display: 'flex' }}>
            <div style={{ flex: '25%' }}>
              <div>
                <img src={bolso} alt="product.name" className={classes.imag} /> <br />
                <img src={bolso} alt="product.name" className={classes.imag} /><br />
                <img src={bolso} alt="product.name" className={classes.imag} /> <br />
                <img src={bolso} alt="product.name" className={classes.imag} />
              </div>
              <img src={opi} alt="dis" className={classes.imgn1} />
            </div>
            <div style={{ flex: '75%' }}>
              <img src={bolso} alt={product.name} className={classes.image} />
              
            </div>
            
          </div>
        </div>
        <div className={classes.col2} style={{ flex: '40%' }}>
          <h2 className={classes.name}>{product.name}</h2>
          <h2 className={classes.price}>$ {product.price}</h2>
          ID: <span style={{ color: "#707070" }}>{product.id}</span><br />
          Categoría: <span className={classes.category} style={{ color: "#707070" }}>{product.category}</span><br />
          <img src={Estrellas} alt="estrellas" className={classes.imgn} />
          <h2 className={classes.description}>Descripción</h2>
          <p className={classes.descriptions}>{product.description}</p>
          <h2 className={classes.description}>Dimensiones</h2>
          Peso: <span style={{ color: "#707070" }}>{product.weight}</span><br />
          Dimensiones: <span style={{ color: "#707070" }}>{product.dimensions.length} x {product.dimensions.width} x {product.dimensions.height}</span><br />
          Colores: <span style={{ color: "#707070" }}>Negro, Marrones, Blanco</span><br />
          Material: <span style={{ color: "#707070" }}>Cuero</span><br />
          <div className={classes.conta}>
            <CartItemCounter className={classes.cont} product={product} quanty={product.quanty}/>
            <img src={Corazon} alt="corazon" className={classes.corazon} />
            <button className={classes.button} onClick={()=>buyProducts(product)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
