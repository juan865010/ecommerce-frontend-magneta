import * as React from 'react';
import { Table, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import {Divider} from '@material-ui/core';

import useStyles from './ListaPedidos.style';


function createData(idpedido, fecha, estado, productos, cantidad, precio) {
  return { idpedido, fecha, estado, productos, cantidad, precio };
}

const rows = [
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 710.00),
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 710.00),
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 710.00),
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 710.00),
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 710.00),
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 710.00),
];

const ListaPedidos = () => {
  const classes=useStyles();
  return (
    <TableContainer component={Paper}  className={classes.boxContainer}>
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
          {rows.map((row) => (
            <TableRow
              className={classes.thodyBox}
              key={row.idpedido}
              sx={{ border: 0  }}
            >
                  <Box className={classes.Lista}>
                    <Typography className={classes.listaTexto1}>{row.idpedido}</Typography>
                    <Typography className={classes.listaTexto2}>{row.fecha}</Typography>
                    <Typography className={classes.listaTexto3}>{row.estado}</Typography>
                    <Typography className={classes.listaTexto4}>{row.productos}</Typography>
                    <Typography className={classes.listaTexto5}>{row.cantidad}</Typography>
                    <Typography className={classes.listaTexto6}>$&nbsp;{row.precio}</Typography> 
                    
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