import React from 'react'
import CartElements from './CartElements';
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import CartTotal from './CartTotal';
import { Grid } from '@material-ui/core';
import useStyles from './CartContent.styles';
const CartContent = () => {
    const classes = useStyles();
    const {cart}=useContext(dataContext);


    return cart.length > 0 ?(
        
        <div>
            <h2 className={classes.title}>Carrito de Compras</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CartElements/>
                </Grid>
                <Grid className={classes.col2} item xs={6}>
                    <CartTotal/>
                </Grid>
            </Grid>
        </div>
    ):(
        <h2 className={classes.title2}>Tu carrito esta vacio</h2>
    )
};

export default CartContent
