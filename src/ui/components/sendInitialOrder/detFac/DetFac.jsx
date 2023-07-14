import useStyles from "./detFac.styles";
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const SendInitialOrder = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <h2>VERIFICAR</h2>
          <h3>Detalles de facturacion</h3>
        </div>
        <div className={classes.container}>
          <TextField
            id="standard-search"
            label="Nombre*"
            type="search"
            variant="standard"
            className={classes.textName}
          />
          <TextField
            id="standard-search"
            label="Apellido*"
            type="search"
            variant="standard"
            className={classes.textName}
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
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={<p style={{ fontWeight: 'bold' }}>Lorem ipsum dolor sit amet</p>} />
        </FormGroup>
        <TextField
          id="standard-search"
          label="Detalles"
          type="search"
          variant="standard"
        />

      </div>
    </>

  );
};

export default SendInitialOrder;

