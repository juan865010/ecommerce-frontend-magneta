import React from "react";
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

function createData(name, calories, fat, carbs, protein, date) {
    return { name, calories, fat, carbs, protein, date};
  }
  function valuetext(value) {
    return `${value}`;
  }
  
  const rows = [
    createData(1,<div className="imageTextContainer">
    <div className="textContainer">
      <span id="nameuser">Lorem ipsum dolor sit amet</span>
    </div>
  </div>, 159, 'Lorem@ipsum.com', '79432663',
  <div className="actionIcons">
    <Link to="/history-client" style={{textDecoration: "none"  }}>
      <button id="divhistorial">Historial</button>
    </Link>
    <Link to="/add-client" style={{textDecoration: "none"  }}>
      <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
    </Link>
    <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
  </div>),
      
    createData(2,<div className="imageTextContainer">
    <div className="textContainer">
      <span id="nameuser">Lorem ipsum dolor sit amet</span>
    </div>
  </div>, 159, 'Lorem@ipsum.com', '79432663',
  <div className="actionIcons">
    <button id="divhistorial">Historial</button>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
    <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
  </div>),
    createData(3,<div className="imageTextContainer">
    
    <div className="textContainer">
      <span id="nameuser">Lorem ipsum dolor sit amet</span>
    </div>
  </div>, 159, 'Lorem@ipsum.com', '79432663',
  <div className="actionIcons">
    <button id="divhistorial">Historial</button>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
    <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
  </div>),
    createData(4,<div className="imageTextContainer">
    
    <div className="textContainer">
      <span id="nameuser">Lorem ipsum dolor sit amet</span>
    </div>
  </div>, 159, 'Lorem@ipsum.com', '79432663',
  <div className="actionIcons">
    <button id="divhistorial">Historial</button>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
    <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
  </div>),
    createData(5,<div className="imageTextContainer">
    
    <div className="textContainer">
      <span id="nameuser">Lorem ipsum dolor sit amet</span>
    </div>
  </div>, 159, 'Lorem@ipsum.com', '79432663',
  <div className="actionIcons">
    <button id="divhistorial">Historial</button>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
    <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
  </div>),
    createData(6,<div className="imageTextContainer">
    
    <div className="textContainer">
      <span id="nameuser">Lorem ipsum dolor sit amet</span>
    </div>
  </div>, 159, 'Lorem@ipsum.com', '79432663',
  <div className="actionIcons">
    <button id="divhistorial">Historial</button>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
    <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
  </div>),
  ];

const Cliente = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Link to="/add-client" style={{textDecoration: "none"  }}>
          <div id="addproduct">
            <FontAwesomeIcon icon={faUserPlus} />
            <span> Agregar Cliente</span>
          </div>
        </Link>
        <div className="tablelist" id="tablelist">
            <Grid container spacing={0}>
              <Grid md={9}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 100 }} aria-label="simple table">
                    <TableHead>
                      <TableRow id="TableRowdiv">
                        <TableCell id="tablecelldiv">ID</TableCell>
                        <TableCell id="tablecelldiv" align="center">NOMBRE</TableCell>
                        <TableCell id="tablecelldiv" align="center">APELLIDO</TableCell>
                        <TableCell id="tablecelldiv" align="center">CORREO ELECTRONICO</TableCell>
                        <TableCell id="tablecelldiv" align="center">TELEFONO</TableCell>
                        <TableCell id="tablecelldiv" align="center">ACCION</TableCell>
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
                          <TableCell align="center">{row.carbs}</TableCell>
                          <TableCell align="center">{row.protein}</TableCell>
                          <TableCell align="center">{row.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer> 
              </Grid>
              <Grid md={3}>
                <div id="divfilter">
                  <React.Fragment>
                    <CardContent>
                      <Typography sx={{ fontSize: 20,}} color="text.secondary" gutterBottom>
                        Filtrar <FontAwesomeIcon icon={faFilter} />
                        <hr />
                        <span id="categoriaid">Sexo</span>
                        <FormGroup id="checkdiv">
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Femenino" />
                          <FormControlLabel control={<Checkbox />} label="Masculino" />
                          <FormControlLabel control={<Checkbox />} label="Ambos" />
                        </FormGroup>
                      </Typography>
                    </CardContent>
                  </React.Fragment>
                </div>
              </Grid>
            </Grid>
        </div>
      </div>
    </div>
  );
};

export default Cliente;