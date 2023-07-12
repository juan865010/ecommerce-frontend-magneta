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
import { FaStar } from 'react-icons/fa';

function createData(name, calories, fat, carbs, protein, date) {
    return { name, calories, fat, carbs, protein, date};
  }
  function valuetext(value) {
    return `${value}`;
  }


  const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
    ));
  
    return <div>{stars}</div>;
  };

  const rows = [
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={3} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={2} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={1} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={0} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={3} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={5} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={6} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={3} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={2} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={1} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={1} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
    createData('Apple iPhone 13 Pro Max 256gb', 'John jacob', <StarRating rating={3} />, <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque est consequatur nihil voluptatibus</span>, '16/08/2023', <Link to="/detalle-opinion" style={{textDecoration: "none"  }}><button type="button" class="btn btn-dark">Detalles</button></Link>),
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
                <div class="row">
                    <div class="col-sm-12">
                        <div id="divfilter">
                            <div class="card">
                                <div class="card-header">
                                    Informacion Del Producto
                                </div>
                                <div class="card-body">                                    
                                    <div class="row">
                                        <div class="col-sm-5">
                                        </div>
                                        <div class="col-sm-7">
                                            <h5 class="card-title">Informacion Del Producto</h5>
                                            <p class="card-text">ID: 12548963</p>
                                            <p class="card-text">625,95 $</p>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <p class="card-text">Dimensiones</p>                                                    
                                                </div>
                                                <div class="col-sm-5">
                                                    <p class="card-text">Altura: 200CM.</p>
                                                    <p class="card-text">Ancho: 0.8CM</p>
                                                </div>
                                                <div class="col-sm-5">
                                                    <p class="card-text">Largo: 200CM.</p>
                                                    <p class="card-text">Peso: 800G</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div><br /> 
                                    <div class="card bg-light mb-3">
                                        <div class="card-header">Header</div>
                                        <div class="card-body">
                                            <h5 class="card-title">Light card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>           
                        </div>
                    </div>
                </div> 
              </Grid>
              <Grid md={3}>
                    <div class="card">
                        <div class="card-header">
                            Opinion Cliente
                        </div>
                        <div class="card-body">                                    
                            +++++++++0
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