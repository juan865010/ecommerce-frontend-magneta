import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./style/client.css"
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { faUserPlus, faArchive, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Importa los estilos CSS
import 'react-date-range/dist/theme/default.css'; // Importa el tema predeterminado

function createData(name, calories, fat, carbs, protein, date) {
    return { name, calories, fat, carbs, protein, date};
  }
  function valuetext(value) {
    return `${value}`;
  }
  
  const rows = [
    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),
      
    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-danger">Cancelado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-primary">Espera</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-danger">Cancelado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

    createData(472582, '16/08/2023', <span class="alert alert-success">Entregado</span>, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, 15, '$695'),

  ];

const Cliente = () => {
    const [selectedRange, setSelectedRange] = useState([
        new Date(),
        new Date(Date.now() + 86400000) // Define un rango de fechas inicial (hoy y mañana)
      ]);
    
      const handleSelect = (ranges) => {
        setSelectedRange([ranges.selection.startDate, ranges.selection.endDate]);
      };
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="tablelist" id="tablelist">
            <Grid container spacing={0}>
              <Grid md={9}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 100 }} aria-label="simple table">
                    <TableHead>
                      <TableRow id="TableRowdiv">
                        <TableCell id="tablecelldiv">NO Pedido</TableCell>
                        <TableCell id="tablecelldiv" align="center">FECHA</TableCell>
                        <TableCell id="tablecelldiv" align="center">ESTADO</TableCell>
                        <TableCell id="tablecelldiv" align="center">PRODUCTOS</TableCell>
                        <TableCell id="tablecelldiv" align="center">CANTIDAD</TableCell>
                        <TableCell id="tablecelldiv" align="center">PRECIO TOTAL</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="left">{row.calories}</TableCell>
                          <TableCell align="center">{row.fat}</TableCell>
                          <TableCell align="left">{row.carbs}</TableCell>
                          <TableCell align="center">{row.protein}</TableCell>
                          <TableCell align="center">{row.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer> 
              </Grid>
              <Grid md={3}>
                <div class="row">
                    <div class="col-sm-12">
                        <div id="divfilter">
                        <React.Fragment>
                            <CardContent>
                            <Typography sx={{ fontSize: 20,}} color="text.secondary" gutterBottom>
                                Filtrar <FontAwesomeIcon icon={faFilter} />
                                <hr />
                                <span id="categoriaid">Estado De Pedido</span>
                                <FormGroup id="checkdiv">
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Entregado" />
                                <FormControlLabel control={<Checkbox />} label="Espera" />
                                <FormControlLabel control={<Checkbox />} label="Cancelado" />
                                </FormGroup>
                            </Typography>
                            </CardContent>
                        </React.Fragment>
                        </div>
                    </div>
                    <div id="divcalendar" class="col-sm-12"><br/>
                        <div id="divfilter">
                        <span id="categoriaid">Rango De Fecha</span>
                        <DateRangePicker
                            ranges={[{ startDate: selectedRange[0], endDate: selectedRange[1], key: 'selection' }]}
                            onChange={handleSelect}
                            showSelectionPreview={false} // Oculta las opciones predefinidas (Hoy, Ayer, etc.)
                            showMonthAndYearPickers={false} // Oculta los selectores de mes y año
                            showDateDisplay={false} // Oculta la visualización de la fecha seleccionada
                            rangeColors={['#FF5C00']} // Personaliza el color del rango seleccionado
                            staticRanges={[]} // Deshabilita las opciones predefinidas
                        />
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div id="divfilter">
                        
                        </div>
                    </div>
                </div>
              </Grid>
            </Grid>
        </div>
      </div>
    </div>
  );
};

export default Cliente;