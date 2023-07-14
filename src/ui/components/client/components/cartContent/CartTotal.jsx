import React from 'react'
import useStyles from './CartTotal.styles';
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Box, Typography } from '@material-ui/core';
const CartTotal = () => {
    const classes = useStyles();
    const {cart} = useContext(dataContext);
    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty, 0);
  return (
    <div className={classes.total}>
        <h2 className={classes.title}>Totales</h2>
        <Box className={classes.totl}>
            <Typography  className={classes.total2}>SUBTOTAL:</Typography>
            <Typography className={classes.numb}>${total}</Typography>
        </Box>
        <h4>Envio: Bolivia</h4>
        <button className={classes.buton1}>APLICAR CUPON</button> <br />
        <hr />
        
        <Box className={classes.totl}>
            <Typography  className={classes.total2}>TOTAL</Typography>
            <Typography className={classes.numb}>${total}</Typography>
        </Box>
        <button className={classes.buton2}>CONTINUAR</button>
    </div>
  )
}

export default CartTotal
