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
                <Grid container spacing={0}>
                    <Grid md={9}>
                        <div id="divinfoproduct">
                            <div class="card">
                                <h5 class="card-header">Informacion Producto</h5>
                                <div class="card-body">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">ID</label>
                                                <input type="text" class="form-control" value={'1'}/>
                                            </div>                                        
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">NOMBRE</label>
                                                <input type="text" class="form-control" value={'Lorem ipsum dolor sit amet'}/>
                                            </div>
                                        </div>
                                    </div><br/>                                  
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Descripcion (Opcional)</label>
                                        <ReactMarkdown renderers={renderers}>{markdownText}</ReactMarkdown>
                                    </div>
                                    </form>
                                </div>
                            </div><br />
                            <div class="card">
                                <h5 class="card-header">Media</h5>
                                <div class="card-body">
                                    <section className="container">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p>Arrastre o seleccione todas la imagenes . . .</p>
                                    </div>
                                    <aside>
                                        <h4>Files</h4>
                                        <ul>{files}</ul>
                                    </aside>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid md={3}>
                        <div id="divprecio">
                            <div class="card">
                                <h5 class="card-header">Precio / Stock</h5>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Precio</label>
                                                <input type="text" class="form-control" value={'100 $'}/>
                                            </div>                                        
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Stock</label>
                                                <input type="text" class="form-control" value={'68'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="divdimensiones">
                            <div class="card">
                                <h5 class="card-header">Dimensiones</h5>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Largo</label>
                                                <input type="text" class="form-control" value={'2.95 CM'}/>
                                            </div>                                        
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Ancho</label>
                                                <input type="text" class="form-control" value={'2.95 CM'}/>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Altura</label>
                                                <input type="text" class="form-control" value={'2.95 CM'}/>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <label for="exampleFormControlInput1">Peso</label>
                                                <input type="text" class="form-control" value={'2.95 CM'}/>
                                            </div>                                        
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <button id="btndiv">KG</button>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <button id="btndiv">GR</button>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div id="divcategoria">
                            <div class="card">
                                <h5 class="card-header">Categoria</h5>
                                <div class="card-body">
                                <FormGroup id="checkdiv">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Mujer" />
                                    <FormControlLabel control={<Checkbox />} label="Hombre" />
                                    <FormControlLabel control={<Checkbox />} label="Todos" />
                                </FormGroup>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
