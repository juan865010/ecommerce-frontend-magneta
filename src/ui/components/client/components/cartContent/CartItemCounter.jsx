import React from 'react'
import useStyles from './CartItemCounte.styles';
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
const CartItemCounter = ({quanty, product}) => {
    const classes = useStyles();
    const {cart, setCart, buyProducts}=useContext(dataContext);
    const decrese = ()=>{
        const productrepeat = cart.find((item)=> item.id === product.id);  
        productrepeat.quanty !== 1 && 
            setCart(cart.map((item)=> (item.id === product.id ? {...product,quanty: 
            productrepeat.quanty - 1} : item)));
    }
  return (
    <div className={classes.count}>
        <p onClick={decrese}>-</p>
        <p className={classes.uno}>{quanty}</p>
        <p onClick={()=> buyProducts(product)}>+</p>
    </div>
  )
}

export default CartItemCounter
