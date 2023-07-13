import * as React from 'react';
import { Table, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import {Divider} from '@material-ui/core';
import useStyles from './ListaPedidos.style';
import pedidos from '../../../respData/res-pedidos.json'


const ListaPedidos = () => {
  const classes=useStyles();
  return (
    <TableContainer className={classes.boxContainer}>
      <Table className={classes.boxTable} aria-label="simple table">
              <div className={classes.titleStyle}>
                <Box component="div"  className={classes.TableHeadbox}>
                  <Typography className={classes.TableHeadstyletexto}>ID Pedido</Typography>
                  <Typography className={classes.TableHeadstyletexto1}>FECHA</Typography>
                  <Typography className={classes.TableHeadstyletexto2}>ESTADO</Typography>
                  <Typography className={classes.TableHeadstyletexto3}>PRODUCTO</Typography>
                  <Typography className={classes.TableHeadstyletexto4}>CANTIDAD</Typography>
                  <Typography className={classes.TableHeadstyletexto5}>PRECIO TOTAL</Typography> 
                </Box>
              </div>
        <TableBody >
          {pedidos.map((pedido) => (
            <TableRow
              className={classes.thodyBox}
              key={pedido.id}
              sx={{ border: 0  }}
            >
                  <Box className={classes.Lista}>
                    <Typography className={classes.listaTexto1}>{pedido.id_Producto}</Typography>
                    <Typography className={classes.listaTexto2}>{pedido.fecha}</Typography>
                    <Typography className={classes.listaTexto3}>{pedido.estado}</Typography>
                    <Typography className={classes.listaTexto4}>{pedido.productos}</Typography>
                    <Typography className={classes.listaTexto5}>{pedido.cantidad}</Typography>
                    <Typography className={classes.listaTexto6}>$&nbsp;{pedido.precio}</Typography> 
                  </Box>
                  <Divider className={classes.hr}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ListaPedidos