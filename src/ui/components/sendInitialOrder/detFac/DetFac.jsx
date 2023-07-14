import useStyles from "./detFac.styles";
import TextField from '@mui/material/TextField';

const SendInitialOrder = () => {
  const classes = useStyles();
  return (
    <>
    <div className={classes.wrapper}>
    <div>
    <h2>VERIFICAR</h2>
        <h3>Detalles de facturacion</h3>   
    </div>     
    <div>
        <TextField
            id="standard-search"
            label="Nombre*"
            type="search"
            variant="standard"
        />
        <TextField
            id="standard-search"
            label="Apellido*"
            type="search"
            variant="standard"
        />
    </div>
        <TextField
          id="filled-select-currency-native"
          select
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
            <option >
                Pais
            </option>
            <option >
              Bolivia
            </option>
            <option >
              Brasil
            </option>
            <option >
              Colombia
            </option>
        </TextField>
        <TextField
            id="standard-search"
            label="Direccion*"
            type="search"
            variant="standard"
        />
         <TextField
            id="standard-search"
            label="Codigo postal*"
            type="search"
            variant="standard"
        />
         <TextField
            id="standard-search"
            label="Ciudad*"
            type="search"
            variant="standard"
        />
         <TextField
            id="standard-search"
            label="Telefono*"
            type="search"
            variant="standard"
        />
         <TextField
            id="standard-search"
            label="Correo*"
            type="search"
            variant="standard"
        />

    </div>
    </>
    
  );
};

export default SendInitialOrder;

