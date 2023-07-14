import React, { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import useStyles from "./Products.styles";
import Corazon from "../img/corazon.png";
import bolso from "../img/img3.png";
import { Link } from "react-router-dom";
import MyComponent from "./select";
import dis from "../img/dis.png";

const Products = () => {
  const { data } = useContext(dataContext);
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(180);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const filteredProducts = data.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <div className={classes.product}>
                  <div className={classes.container}>
                    <div className="row">
                      <Link className="nav-linki" to={`/product/${product.id}`}>
                        <img src={bolso} alt={product.name} className={classes.image} />
                      </Link>
                    </div>
                    <div className={classes.fila2}>
                      {product.name}
                      <a href="/">
                        <img src={Corazon} alt="corazon" className={classes.imgen} />
                      </a>
                    </div>
                    <div className="row">
                      <p className={classes.fila3}>{product.description}</p>
                    </div>
                    <div className="row">
                      <p className={classes.fila4}>$ {product.price}</p>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.sidebar}>
            <div className={classes.container2}>
              <div className="row">
                <TextField
                  type="text"
                  placeholder="Buscar"
                  className={classes.searchInput}
                  value={searchTerm}
                  onChange={handleSearch}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <MyComponent onChange={handleSearch} />
              <MyComponent onChange={handleSearch} />
              <div className="row">
                <div className={classes.wrapper}>
                  <p className={classes.tittle}>Precio</p>
                  <div className={classes.pricesContainer}>
                    <p className={classes.priceLeft}>$0</p>
                    <p className={classes.priceRight}>$180</p>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="180"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                  />
                </div>
              </div>
              <img className={classes.dispo} src={dis} alt="disponible" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
