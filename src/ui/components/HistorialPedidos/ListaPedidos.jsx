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
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 37, 293.01),
  createData(41152845, '16/18/2023', 'Cancelado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 24, 475.22),
  createData(41152845, '16/18/2023', 'Cancelado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 67, 5.22),
  createData(41152845, '16/18/2023', 'Entregado', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur repudiandae tempore laudantium ipsum. ', 49, 10.50),

];

const ListaPedidos = () => {
  const classes=useStyles();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 887 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell colSpan={6} className={classes.p}>
              <div style={{ display:'inline-flex' }} className={classes.titleStyle}>
                <Box component="div"  className={classes.TableHeadbox}>
                  <Typography className={classes.TableHeadstyletexto}>ID Pedidos</Typography>
                </Box>
                <Box component="div" className={classes.TableHeadbox1}>
                  <Typography className={classes.TableHeadstyletexto1}>FECHA</Typography>
                </Box>
                <Box  component="div"  className={classes.TableHeadbox2}>
                  <Typography className={classes.TableHeadstyletexto2}>ESTADO</Typography>
                </Box>
                <Box component="div" className={classes.TableHeadbox3}>
                  <Typography className={classes.TableHeadstyletexto3}>PRODUCTO</Typography>
                </Box>
                <Box component="div" className={classes.TableHeadbox4}>
                  <Typography className={classes.TableHeadstyletexto4}>CANTIDAD</Typography>
                </Box>
                <Box component="div" className={classes.TableHeadbox5}>
                  <Typography className={classes.TableHeadstyletexto5}>PRECIO</Typography> 
                </Box>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.idpedido}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell colSpan={6} className={classes.p}>
                  <div style={{ width: '100%', display:'inline-flex' }} >
                    <Box component="div"  className={classes.TableBodybox}>
                      <Typography className={classes.TableBodystyletexto}>{row.idpedido}</Typography>
                    </Box>
                    <Box component="div" className={classes.TableBodybox1}>
                      <Typography className={classes.TableBodystyletexto1}>{row.fecha}</Typography>
                    </Box>
                    <Box  component="div"  className={classes.TableBodybox2}>
                      <Typography className={classes.TableBodystyletexto2}>{row.estado}</Typography>
                    </Box>
                    <Box component="div" className={classes.TableBodybox3}>
                      
                      <Typography className={classes.TableBodystyletexto3} variant="body2">{row.productos}</Typography>
                    </Box>
                    <Box component="div" className={classes.TableBodybox4}>
                      <Typography className={classes.TableBodystyletexto4}>{row.cantidad}</Typography>
                    </Box>
                    <Box component="div" className={classes.TableBodybox5}>
                      <Typography className={classes.TableBodystyletexto5}>$&nbsp;{row.precio}</Typography> 
                    </Box>  
                  </div>
                  <Divider className={classes.TableBodyDivider}/>
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ListaPedidos