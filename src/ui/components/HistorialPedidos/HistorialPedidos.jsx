import React from 'react';
import { Grid,Box, Container, Paper } from '@material-ui/core';
import ListaPedidos from './ListaPedidos';
import FiltrarPedidos from './FiltrarPedidos';
import useStyles from './HistorialPedidos.styles';

const HistorialPedidos = () => {
  const classes = useStyles();
  return (
    <Box sx={{display:'flex',width:200}} >
      <Container className={classes.containersx}>
        <Grid container>
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