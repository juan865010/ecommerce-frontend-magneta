import React from 'react'
import { Grid,Box, Container, Paper } from '@material-ui/core';
import listOrders from './listOrders';
import filterOrder from './filterOrder';
import useStyles from './ordersHistory.style';

const ordersHistory = () => {
    const classes = useStyles();
    return (
      <Box sx={{display:'flex',width:200}} >
        <Container className={classes.containersx}>
          <Grid container>
            {/*lista pedidos*/}
            <Grid item>
              <Paper className={classes.sx}>
                <listOrder/>
              </Paper>
            </Grid>
            {/*filter*/}
            <Grid item>
                <Paper className={classes.xs}>
                  <filterOrder/>
                </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
}

export default ordersHistory