import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import bolso from '../img/img3.png';
import React from 'react'
import CartItemCounter from "./CartItemCounter";
import useStyles from "./CartElements.styles";
import { Grid } from "@material-ui/core";

const CartElements = () => {
    const {cart,setCart}=useContext(dataContext);
    const classes = useStyles();
    const deleteProduct = (id)=> {
        const foundId = cart.find((element)=> element.id ===id);
        const newCart = cart.filter((element)=>{
            return element !== foundId;
        });

        setCart(newCart);
    }
  return cart.map((product)=>{
    return(
        <div className={classes.col1} key={product.id}>
            <Grid className={classes.colm1} container spacing={4}>
                <Grid item xs={3}>
                    <img className={classes.image} src={bolso} alt="image" />
                </Grid>
                <Grid item xs={3}>
                    <h2 className={classes.name}>{product.name}</h2>
                    <p className={classes.des}>{product.category}</p>
                    <p className={classes.price}>${product.price * product.quanty}</p>
                </Grid>
                <Grid item xs={3}>
                    <CartItemCounter product={product} quanty={product.quanty}/>
                    
                </Grid>
                <Grid item xs={3}>
                    <p className={classes.x} onClick={()=>deleteProduct(product.id)}>X</p>
                </Grid>
            </Grid>
        </div>
    )
  })
}

export default CartElements
