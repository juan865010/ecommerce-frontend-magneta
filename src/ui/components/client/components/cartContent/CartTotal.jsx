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
            <Typography className={classes.numb1}>${total}</Typography>
        </Box>
        <div className={classes.bo}>
        <h4>ENVIO</h4>
        <p className={classes.p}>Potosi - Bolivia</p>
        </div>
        <div className={classes.btn}>
          <p>Aplcar Cupon</p>
          <button className={classes.buton1}>APLICAR CUPON</button> <br />
        </div>
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
