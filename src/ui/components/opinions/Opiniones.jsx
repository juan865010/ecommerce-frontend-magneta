import React, { useEffect, useState } from "react";
import useStyles from "./Opiniones.style";
import { Container } from "@material-ui/core";
import Filtrars from "../opinions/filtrars/Filtrar"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button,} from "@material-ui/core";


const opiniones = [
    {
        id: 1,
        NombreProducto: "Phone",
        NombreCliente: "Juan",
        Calificacion: "⭐⭐",
        Comentario: "Buen producto recomendable para las compras",
        Fecha: "12/12/2020",
    }, 
    {
         id: 2,
        NombreProducto: "Phone11",
        NombreCliente: "Sam",
        Calificacion: "⭐⭐⭐",
        Comentario: "Buen producto",
        Fecha: "12/12/2020",
    },
    {
        id: 2,
       NombreProducto: "Phone11",
       NombreCliente: "Sam",
       Calificacion: "⭐⭐⭐",
       Comentario: "Buen producto",
       Fecha: "12/12/2020",
   }

]
/*const Opiniones = () => {
  const classes = useStyles();
  const [opiniones, setOpiniones] = useState([]);

  useEffect(() => {
    fetch("URL_DE_TU_API")
      .then((response) => response.json())
      .then((data) => setOpiniones(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDetalle = (id) => {
    console.log(id);
  };*/
  
  const Opiniones = () => {
    const classes = useStyles();
  
    const handleDetalle = (id) => {
      console.log(id);
    };
 
    return (
        <div className={classes.wrapper}>
            <>
            <Container className={classes.Container}>
                <TableContainer className={classes.TableContainer} >
                    <Table >
                        <TableHead>
                            <TableRow className={classes.TableHead}>  
                                <TableCell>PRODUCTO</TableCell>
                                <TableCell>CLIENTE</TableCell>
                                <TableCell>CALIFICACION</TableCell>
                                <TableCell>COMENTARIO</TableCell>
                                <TableCell>FECHA</TableCell>
                                <TableCell>ACCÍON</TableCell>   
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {opiniones.map((opinion) => (
                                <TableRow key={opinion.id}>
                                    <TableCell className={classes.TableRow}>{opinion.NombreProducto}</TableCell> 
                                    <TableCell className={classes.TableRow}>{opinion.NombreCliente}</TableCell>
                                    <TableCell className={classes.TableRow}>{opinion.Calificacion}</TableCell>
                                    <TableCell className={classes.TableRow}>{opinion.Comentario}</TableCell>
                                    <TableCell className={classes.TableRow}>{opinion.Fecha}</TableCell>
                                    <TableCell className={classes.TableRow}>{opinion.Accion} 
                                    <Button className={classes.buton} variant="containet" onClick={() => handleDetalle(opinion.id)}>
                                        Detalle
                                    </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <Filtrars />
            </>
        </div>
    )
}
export default Opiniones;
