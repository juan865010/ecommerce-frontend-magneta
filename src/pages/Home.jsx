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
import "../pages/home/home.scss";
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { faPlus, faArchive, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
function valuetext(value) {
  return `${value}`;
}

const rows = [
  createData(1,
    <div className="imageTextContainer">
      <div className="imageContainer">
        <img
          src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
          alt="imagen"
          className="avatar"
        />
      </div>
      <div className="textContainer">
        <span id="nameuser">Lorem ipsum dolor sit amet</span>
        <br />
        <span id="emailuser">Lorem ipsum dolor sit amet consectetur.</span>
      </div>
    </div>, 159, '$140',
    <div className="actionIcons">
      <span className="actionIcon"><FontAwesomeIcon icon={faArchive} /></span>
      <Link to="/add-product" style={{textDecoration: "none"  }}>
        <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
      </Link>
      <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
    </div>),
  createData(2,<div className="imageTextContainer">
  <div className="imageContainer">
    <img
      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
      alt="imagen"
      className="avatar"
    />
  </div>
  <div className="textContainer">
    <span id="nameuser">Lorem ipsum dolor sit amet</span>
    <br />
    <span id="emailuser">Lorem ipsum dolor sit amet consectetur.</span>
  </div>
</div>, 159, '$140',
<div className="actionIcons">
  <span className="actionIcon"><FontAwesomeIcon icon={faArchive} /></span>
  <Link to="/add-product" style={{textDecoration: "none"  }}>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
  </Link>  
  <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
</div>),
  createData(3,<div className="imageTextContainer">
  <div className="imageContainer">
    <img
      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
      alt="imagen"
      className="avatar"
    />
  </div>
  <div className="textContainer">
    <span id="nameuser">Lorem ipsum dolor sit amet</span>
    <br />
    <span id="emailuser">Lorem ipsum dolor sit amet consectetur.</span>
  </div>
</div>, 159, '$140',
<div className="actionIcons">
  <span className="actionIcon"><FontAwesomeIcon icon={faArchive} /></span>
  <Link to="/add-product" style={{textDecoration: "none"  }}>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
  </Link>
  <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
</div>),
  createData(4,<div className="imageTextContainer">
  <div className="imageContainer">
    <img
      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
      alt="imagen"
      className="avatar"
    />
  </div>
  <div className="textContainer">
    <span id="nameuser">Lorem ipsum dolor sit amet</span>
    <br />
    <span id="emailuser">Lorem ipsum dolor sit amet consectetur.</span>
  </div>
</div>, 159, '$140',
<div className="actionIcons">
  <span className="actionIcon"><FontAwesomeIcon icon={faArchive} /></span>
  <Link to="/add-product" style={{textDecoration: "none"  }}>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
  </Link>
  <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
</div>),
  createData(5,<div className="imageTextContainer">
  <div className="imageContainer">
    <img
      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
      alt="imagen"
      className="avatar"
    />
  </div>
  <div className="textContainer">
    <span id="nameuser">Lorem ipsum dolor sit amet</span>
    <br />
    <span id="emailuser">Lorem ipsum dolor sit amet consectetur.</span>
  </div>
</div>, 159, '$140',
<div className="actionIcons">
  <span className="actionIcon"><FontAwesomeIcon icon={faArchive} /></span>
  <Link to="/add-product" style={{textDecoration: "none"  }}>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
  </Link>
  <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
</div>),
  createData(6,<div className="imageTextContainer">
  <div className="imageContainer">
    <img
      src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=30"
      alt="imagen"
      className="avatar"
    />
  </div>
  <div className="textContainer">
    <span id="nameuser">Lorem ipsum dolor sit amet</span>
    <br />
    <span id="emailuser">Lorem ipsum dolor sit amet consectetur.</span>
  </div>
</div>, 159, '$140',
<div className="actionIcons">
  <span className="actionIcon"><FontAwesomeIcon icon={faArchive} /></span>
  <Link to="/add-product" style={{textDecoration: "none"  }}>
    <span className="actionIcon"><FontAwesomeIcon icon={faEdit} /></span>
  </Link>
  <span className="actionIcon"><FontAwesomeIcon icon={faTrash} /></span>
</div>),
];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Link to="/add-product" style={{textDecoration: "none"  }}>
          <div id="addproduct">
            <FontAwesomeIcon icon={faPlus} />
            <span> Agregar Producto</span>
          </div>
        </Link>
        <div className="tablelist" id="tablelist">
            <Grid container spacing={0}>
              <Grid md={9}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow id="TableRowdiv">
                        <TableCell id="tablecelldiv">ID</TableCell>
                        <TableCell id="tablecelldiv" align="center">PRODUCTOS</TableCell>
                        <TableCell id="tablecelldiv" align="center">STOCK</TableCell>
                        <TableCell id="tablecelldiv" align="center">PRECIO</TableCell>
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
                        <span id="categoriaid">Categoria</span>
                        <FormGroup id="checkdiv">
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Mujer" />
                          <FormControlLabel control={<Checkbox />} label="Hombre" />
                          <FormControlLabel control={<Checkbox />} label="Todos" />
                        </FormGroup>
                        <hr />
                        <span id="categoriaid">Material</span>
                        <FormGroup id="checkdiv">
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Metals" />
                          <FormControlLabel control={<Checkbox />} label="Plastic" />
                          <FormControlLabel control={<Checkbox />} label="Glass" />
                          <FormControlLabel control={<Checkbox />} label="Ceramic" />
                          <FormControlLabel control={<Checkbox />} label="Minerals" />
                        </FormGroup>
                        <hr />
                        <span id="categoriaid">Stock</span>
                        <FormGroup id="checkdiv">
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Disponible" />
                          <FormControlLabel control={<Checkbox />} label="Agotado" />
                        </FormGroup>
                        <hr />
                        <span id="categoriaid">Cantidad</span>
                        <Box sx={{ width: 100 }}>
                          <Slider
                            id="sliderdiv"
                            aria-label="Temperature"
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            color="secondary"
                          />
                        </Box>
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

export default Home;
