import React from 'react';
import { Grid,Box, Container, Paper } from '@material-ui/core';
import ListaPedidos from './ListaPedidos';
import FiltrarPedidos from './FiltrarPedidos';
import useStyles from './HistorialPedidos.styles';

<<<<<<< HEAD
=======

>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
const HistorialPedidos = () => {
  const classes = useStyles();
  return (
    <Box sx={{display:'flex',width:200}} >
      <Container className={classes.containersx}>
<<<<<<< HEAD
        <Grid container>
=======
        <Grid container spacing={3}>
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
          {/*lista pedidos*/}
          <Grid item>
            <Paper className={classes.sx}>
              <ListaPedidos/>
            </Paper>
          </Grid>
          {/*filter*/}
          <Grid item>
              <Paper className={classes.xs}>
                <FiltrarPedidos/>
              </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HistorialPedidos;