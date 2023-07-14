import React from 'react';
import { Grid,Box, Container, Paper } from '@material-ui/core';
import Filtrars from './filtrars/Filter';
import useStyles from './List_opinion_style';
import Opiniones from './Opinions';

const ListOpinions = () => {
  const classes = useStyles();
  return (
    <Box sx={{display:'flex',width:200}} >
      <Container className={classes.containersx}>
        <Grid container>
          <Grid item>
            <Paper className={classes.sx}>
              <Opiniones/>
            </Paper>
          </Grid>
          <Grid item>
              <Paper className={classes.xs}>
                <Filtrars />
              </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListOpinions;