import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,} from "reactstrap";
import perfil from './asset/perfil.png'
import editar from './asset/editar.jpg'
import eliminar from './asset/eliminar.jpg'
import Frame from './asset/Frame.jpg'
import Frame2 from './asset/Frame2.jpg'
import users from './asset/users.jpg'
import agregar from './asset/agregar.jpg'
const data = [
{ id: 1, NOMBRE: "Wlogan", APELLIDO_PATERNO: "Essence", APELLIDO_MATERNO: "Howard" , CORREO:"wlogan13@gmail.com",TELEFONO:"67565676"},
{ id: 2, NOMBRE: "Rosa", APELLIDO_PATERNO: "Choque", APELLIDO_MATERNO: "Lopez", CORREO:"rosa345@gmail.com", TELEFONO:"63673268"},
 
]

class App extends React.Component {
  
  state = {
    data: data,
    modalInsertar: false,
    form: {
      id: "",
      NOMBRE: "",
      APELLIDO_PATERNO : "",
      APELLIDO_MATERNO : "",
      CORREO: "",
      TELEFONO:"",
      ID_PRECIO:"",
    

    },
  };
  

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };
   

   editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].NOMBRE = dato.NOMBRE;
        arreglo[contador].APELLIDO = dato.APELLIDO_PATERNO+dato.APELLIDO_MATERNO;
        arreglo[contador].CORREO = dato.CORREO;
        arreglo[contador].TELEFONO = dato.TELEFONO;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  
  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar al Cliente "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
   

   
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
       <>
       {
      
 } 
        <Container align="right" >
        
        <br />
      
        <div><h3  color='#61dafb' align="left" class="typografia"><span class="text-muted">F</span>
        rasier<img  src={perfil} align="right"/></h3> </div>
        <br />
        <br />
       
        <br />
         <div align='left'  class="MuiInputBase-root MuiInputBase-colorPrimary css-1br2x8"><input  aling ='right' autofocus="" placeholder=" 🔍 búsqueda…" type="text" aria-label="iconos de busqueda" class="MuiInputBase-input css-mnn31" value= ""/></div>
        
          <Button  color ="write"  onClick={()=>this.mostrarModalInsertar()} ><img src={agregar}></img> </Button>
          
          <br />
          <br />
          
          <div><h4 align="left" color='#61dafb'>Clientes/Lista de Clientes</h4> </div>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"  />
          <Table class="table table-bordered grocery-crud-table table-hover" > 
          
            <thead  >
              <tr align="center" class="warning">
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO </th>
                <th >CORREO ELECTRÓNICO</th>
                <th>TELÉFONO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody align="center">
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.NOMBRE}</td>
                  <td>{dato.APELLIDO_PATERNO +" " +dato.APELLIDO_MATERNO}</td>
                  <td>{dato.CORREO}</td>
                  <td>{dato.TELEFONO}</td>
                  <td>
                    <Button color="write"  onClick={this.Modalhistorial } >Historial</Button>
                    <img src={editar} onClick={() => this.mostrarModalActualizar(dato.id)}></img>
                    <img src={eliminar}  onClick={() => this.eliminar(dato)}></img>
                  
                    

                  </td>
                </tr>
              ))}
            </tbody>
            
          </Table>
          
        </Container>
        <Modal isOpen={this.state.modalActualizar}>
        
          <ModalHeader>
          
          <div><h1  color='#61dafb'> <span class="text-muted">F</span>rasier  </h1></div>
          <img  src={perfil} align="right" />
          <div><h3> Clientes/Editar cliente</h3> </div>
          
          </ModalHeader>
          <ModalBody>
                 
          <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido Paterno: 
              </label>
              <input
                className="form-control"
                name="APELLIDO_PATERNO"
                type="text"
                onChange={this.handleChange}
              />
              </FormGroup>
              <FormGroup>
              <label>
                Apellido Materno: 
              </label>
              <input
                className="form-control"
                name="APELLIDO_MATERNO"
                type="text"
                
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="CORREO"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Celular: 
              </label>
              <input
                className="form-control"
                name="TELEFONO"
                type="numeric"
                onChange={this.handleChange}
              />
            </FormGroup>
            <div><h3>Dirección de facturacion</h3></div>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Provincia: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          
            <FormGroup>
              <label>
                Código Postal: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Dirección: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <div><h4> Dirección de envío <img  src={perfil} align="right"/></h4> </div> 
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Provincia: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
           
            <FormGroup>
              <label>
                Dirección 1: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Dirección2: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <div><h3>Preferencias de Marketing</h3></div>
            <FormGroup>
              <label >
                <img src={Frame2}/>
              </label>
            </FormGroup>


          </ModalBody>

          <ModalFooter>
            <Button class="style"
              
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
             Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
 
          <div><h3  color='#61dafb'><span class="text-muted">F</span>rasier<img  src={perfil} align="right"/> </h3> </div>
        
           <div><h3>clientes/Agregar nuevo cliente</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Apellido Paterno: 
              </label>
              <input
                className="form-control"
                name="APELLIDO_PATERNO"
                type="text"
                onChange={this.handleChange}
              />
              </FormGroup>
              <FormGroup>
              <label>
                Apellido Materno: 
              </label>
              <input
                className="form-control"
                name="APELLIDO_MATERNO"
                type="text"
                
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="CORREO"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
              Celular: 
              </label>
              <input
                className="form-control"
                name="TELEFONO"
                type="numeric"
                onChange={this.handleChange}
              />
            </FormGroup>
            <div><h3>Dirección de facturacion</h3></div>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Provincia: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          
            <FormGroup>
              <label>
                Código Postal: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Dirección: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <div><h3>Dirección de envío <img src={Frame}/></h3></div>
            <FormGroup>
              <label>
                Pais: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Ciudad: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Provincia: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
           
            <FormGroup>
              <label>
                Dirección 1: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Dirección2: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <div><h3>Preferencias de Marketing</h3></div>
            <FormGroup>
              <label >
                <img src={Frame2}/>
              </label>
            </FormGroup>
          </ModalBody>
          
          <ModalFooter>
            <Button class="style" onClick={() => this.insertar()}> Guardar </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
