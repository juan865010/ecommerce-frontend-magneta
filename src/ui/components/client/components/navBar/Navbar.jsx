import React from 'react'
import useStyles from './Navbar.styles'
import lupa from '../img/lupa.png'
import corazon from '../img/corazon.png'
import carrito from '../img/carrito.png'
import usuario from '../img/user.png'
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'


const Navbar = () => {

const classes = useStyles();
  return (
    <nav className={classes.wrapper}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <Typography  variant="h6">
            <Link to="/" style={{ textDecoration: "none"}}>
                <Typography variant="h6" className={classes.title} >
                    <span  style={{ color: "#A18A68" }}>F</span>rasier
                </Typography>
            </Link>
            </Typography>
        </Grid>
        <Grid  item xs={6}>
            <Typography variant="h6">
                <div className={classes.col2}>
                    <Link to={"/"} style={{ textDecoration: "none"}}><a className={classes.link}>Inicio</a></Link>
                    <a href="/" className={classes.link}>Joyeria</a>
                    <a href="/" className={classes.link}>Accesorios</a>
                    <a href="/" className={classes.link}>Carteras</a>
                    <a href="/" className={classes.link}>Nosotros</a>
                    <p>|</p>
                    <img src={lupa} className={classes.image} alt="lupa" / >
                    <img src={corazon} className={classes.image} alt="corazon" />
                    <Link  to={"/cart"} ><img src={carrito} alt="carrito" className={classes.imagelink}/></Link>
                    <img src={usuario} className={classes.image} alt="usuario" />
                </div>
            </Typography>
        </Grid>
        </Grid>
    </nav>
  )
}

export default Navbar
