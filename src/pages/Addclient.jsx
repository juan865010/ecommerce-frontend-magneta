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
import "./style/add.css"
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
import 'bootstrap/dist/css/bootstrap.css';
import { useDropzone } from 'react-dropzone';
import ReactMarkdown from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';


const Home = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const markdownText = `
  # Título principal
  
  `;

const renderers = {
  heading: ({ level, children }) => {
    return React.createElement(`h${level}`, { style: { color: 'blue' } }, children);
  },
  paragraph: ({ children }) => {
    return <p style={{ fontSize: '18px' }}>{children}</p>;
  },
  listItem: ({ children }) => {
    return (
      <li style={{ marginBottom: '5px' }}>
        <input type="checkbox" style={{ marginRight: '5px' }} />
        {children}
      </li>
    );
  },
  code: ({ language, value }) => {
    return <pre style={{ background: '#f0f0f0', padding: '10px' }}>{value}</pre>;
  },
  table: ({ children }) => {
    return <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>{children}</table>;
  },
  tableCell: ({ isHeader, children }) => {
    const CellComponent = isHeader ? 'th' : 'td';
    return (
      <CellComponent style={{ border: '1px solid black', padding: '5px' }}>{children}</CellComponent>
    );
  },
};

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="contentdiv" id="contentdiv">
            <div className="divform" id="divform">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <h5 class="card-header">Informacion Del Cliente</h5>
                            <div class="card-body">
                            <form>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">ID</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Nombre</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div><br/>                                  
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Apellido Paterno</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Apellido Materno</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div><br/> 
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Celular</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="exampleFormControlInput1">Email</label>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div><br/> 
                            </form>
                            </div>
                        </div>                                                          
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h5 class="card-header">Direccion De Facturacion</h5>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Pais</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Ciudad</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div><br/> 
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Provincia</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Codigo postal</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div><br/> 
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Direccion</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                </div><br/> 
                            </div>
                        </div> 
                    </div>
                </div> <br/>
                <div class="row">
                    <div class="col-sm-9">
                        <div class="card">
                            <h5 class="card-header">Informacion Del Cliente</h5>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Pais</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Ciudad</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Provincia</label>
                                            <input type="text" class="form-control"/>
                                        </div>
                                    </div>
                                </div><br/> 
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Direccion 1</label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                </div><br />
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlInput1">Direccion 2 (opcional) </label>
                                            <input type="text" class="form-control"/>
                                        </div>                                        
                                    </div>
                                </div><br/> 
                            </div>
                        </div>                                                          
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <h5 class="card-header">Preferencias De Marketing</h5>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <FormGroup id="checkdiv">
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Folletos" />
                                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Descuentos" />
                                            <FormControlLabel control={<Checkbox />} label="Promociones" />
                                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Ofertas" />
                                            <button type="button" class="btn btn-dark">REGISTRAR</button>
                                            </FormGroup>
                                        </div>                                        
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <FormGroup id="checkdiv">
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                                            <FormControlLabel control={<Checkbox />} label="Publicidad" />
                                            <FormControlLabel control={<Checkbox defaultChecked/>} label="Cupones" />
                                            <FormControlLabel control={<Checkbox />} label="Todos" />
                                            <button type="button" class="btn btn-danger">CANCELAR</button>
                                            </FormGroup>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>                       
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
