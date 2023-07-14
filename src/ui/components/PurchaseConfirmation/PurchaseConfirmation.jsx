import React from 'react'
import {Box,Typography,Divider,Grid, Container, Paper, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import useStyles from './PurchaseConfirmation.style'

function createData(idpedido, nombre,precio) {
  return { idpedido, nombre, precio};
}
function createDatos(numero, opciones,correo,direccion,metodo,telefono,fecha) {
  return { numero, opciones, correo,direccion,metodo,telefono,fecha};
}

const rows = [
  createData(411,'lorem insup',60),
  createData(411,'lorem insup',100),
  createData(411,'lorem insup',80),
];
const rowss = [
  createDatos(1879605573994,'Standard delivery','Vitathemes@gmail.com','Kristian holst 34 old street W1F 7NU london United Kingdom','*************7865',448749790988,'gaegagag'),
];

const PurchaseConfirmation = () => {
    const classes=useStyles();
  return (
    <>
        <Box className={classes.base}>
                <Box className={classes.confirmacion}>
                        <svg className={classes.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.7301 13.35L14.3501 7.73004C14.5342 7.53689 14.5342 7.23319 14.3501 7.04004L13.8201 6.51004C13.6257 6.31947 13.3145 6.31947 13.1201 6.51004L8.3801 11.25L6.8801 9.76004C6.78936 9.66336 6.66268 9.60852 6.5301 9.60852C6.39751 9.60852 6.27083 9.66336 6.1801 9.76004L5.6501 10.29C5.55544 10.3839 5.5022 10.5117 5.5022 10.645C5.5022 10.7784 5.55544 10.9062 5.6501 11L8.0301 13.35C8.12083 13.4467 8.24751 13.5016 8.3801 13.5016C8.51268 13.5016 8.63936 13.4467 8.7301 13.35Z" fill="#A18A68"/>
                        </svg>
                        <Typography className={classes.letras}>
                            hemos recibido tu pedido
                        </Typography>
                </Box>
                <Container className={classes.containersx}>
                  <Grid container spacing={0}>
                    {/*lista pedidos*/}
                    <Grid item>
                      <Paper className={classes.sx}>
                        <Box className={classes.boxPedido}>
                        <Typography className={classes.letrasDatos}>Datos</Typography>  
                            <Box className={classes.datosss}>
                              <Box className={classes.datosss1}>
                                <Box>
                                  <Typography className={classes.texto1}>
                                    Numero de Seguimiento 
                                  </Typography>
                                  <Typography className={classes.texto2}>
                                  1879605573994
                                  </Typography>
                                  <Typography className={classes.texto3}>
                                    CORREO
                                  </Typography>
                                  <Typography>
                                  Vitathemes@gmail.com
                                  </Typography>
                                  <Typography className={classes.texto3}>
                                    Metodo de Pago
                                  </Typography>
                                  <Typography>
                                    Mastercard*************7865
                                  </Typography>
                                  <Typography className={classes.texto3}>
                                    FECHA
                                  </Typography>
                                  <Typography>
                                  October 8,2020
                                  </Typography>
                                </Box>
                              </Box>
                              <Box className={classes.datosss2}>
                                  <Typography className={classes.texto1}>
                                    Opciones de Entrega
                                  </Typography>
                                  <Typography>
                                  Standard delivery
                                  </Typography>
                                  <Typography className={classes.texto3}>
                                    DIRECCION DE ENTREGA
                                  </Typography>
                                  <Typography>
                                  Kristian holst 34 old street W1F 7NU london United Kingdom
                                  </Typography>
                                  <Typography className={classes.texto3}>
                                    TELEFONO
                                  </Typography>
                                  <Typography>
                                  +44 8749790988
                                  </Typography>
                              </Box>
                              {/* <Typography>CORREO</Typography>
                              <Typography className={classes.letrasOpciones1}>Direccion de Entrega</Typography>
                            </Grid>
                            </Grid>
                            <Grid className={classes.datos}>
                              <Typography  >Vitathemes@gmail.com</Typography>
                              <Typography className={classes.letrasDatos1}>Kristian holst 34 old street W1F 7NU london United Kingdom</Typography> */}
                            </Box>                                                   
                        </Box>
                      </Paper>
                    </Grid>
                    {/*filter*/}
                    <Grid item>
                        <Paper className={classes.xs}>
                        <Typography className={classes.textopedido1}>Pedido</Typography>
                        <Box className={classes.pedido}>
                              <Box className={classes.pHeader}>
                                <Typography className={classes.pHeader1}>PRODUCTOS</Typography>
                                <Typography className={classes.pHeader2}>TOTAL</Typography>
                              </Box>
                              <Divider className={classes.hr}/>
                              <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 887 }} aria-label="simple table">
                                <TableBody>
                                {rows.map((row) => (
                                  <TableRow
                                    key={row.idpedido}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell colSpan={6} className={classes.p}>
                                        <div style={{ width: '100%', display:'inline-flex' }} >
                                          <Box component="div" className={classes.TableBodybox1}>
                                            <Typography className={classes.TableBodystyletexto1}>{row.nombre}</Typography>
                                          </Box>
                                          <Box  component="div"  className={classes.TableBodybox2}>
                                            <Typography className={classes.TableBodystyletexto2}>$&nbsp;{row.precio}</Typography>
                                          </Box>  
                                        </div> 
                                    </TableCell> 
                                  </TableRow>
                                ))}
                              </TableBody>
                                </Table>
                              </TableContainer>
                              <Divider/>
                              <Box className={classes.pHeader}>
                                <Typography className={classes.texto4}>CUPON </Typography>
                                <Typography className={classes.texto5}>532HO22N3</Typography>
                                <Typography className={classes.pHeader2}>-4</Typography>
                              </Box>
                              <Divider/>
                              <Box className={classes.pHeader}>
                                <Typography className={classes.texto6}>SUBTOTAL</Typography>
                                <Typography className={classes.texto}>85</Typography>
                              </Box>
                              <Divider/>
                              <Box className={classes.pHeader}>
                                <Typography className={classes.texto7}>ENVIO</Typography>
                                <Typography className={classes.texto8}>ESTANDAR</Typography>
                                <Typography className={classes.pHeader2}>20</Typography>
                              </Box>
                              <Divider/>
                              <Box className={classes.pHeader}>
                                <Typography className={classes.texto9}>TOTAL</Typography>
                                <Typography className={classes.pHeader2}>100</Typography>
                              </Box>
                        </Box>
                        </Paper>
                    </Grid>
                  </Grid>
              </Container>
        </Box>
    </>
  )
}

export default PurchaseConfirmation