import useStyles from "./FormClient.styles";
import { Box, Typography } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
//import Phone from '../../../assets/icons/Flag_USA.svg'
import { ReactComponent as Flag } from "../../../assets/icons/Flag_USA.svg";
import { ReactComponent as Phone } from "../../../assets/icons/Phone.svg";
import { ReactComponent as Email } from "../../../assets/icons/Email.svg";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';

const FormClient = () => {
  const classes = useStyles();
  return (
    <form>
      <Box className={classes.box}>
        <Box className={classes.formContainer}>
          <p className={classes.title}>Informacion del cliente</p>
          <Box className={classes.container}>
            <Box>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>ID</Typography>
                <TextField label="ID" />
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Paterno</Typography>
                <TextField label="Apellido" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Celular</Typography>
                <TextField label={<><Flag />+1   (555) 000-0000<Phone /></>} />
              </FormControl >
            </Box>
            <Box>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Nombre</Typography>
                <TextField label="Nombre" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Materno</Typography>
                <TextField label="Apellido" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Email</Typography>
                <TextField
                  label={<>email@gmail.com<Email /></>}
                  type="email"
                />
              </FormControl >
            </Box>
          </Box>
        </Box>
        <Box className={classes.formContainer}>
          <p className={classes.title}>Direccion de facturacion</p>
          <Box className={classes.container}>
            <Box>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Pais</Typography>
                <TextField label="Pais" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Provincia</Typography>
                <TextField label="Provincia" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "173%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Direccion</Typography>
                <TextField label="Direccion" />
              </FormControl >
            </Box>
            <Box>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Ciudad</Typography>
                <TextField label="Ciudad" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Codigo Postal</Typography>
                <TextField label="Codigo Postal" />
              </FormControl >
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.box}>
        <Box className={classes.formSendDirection}>
          <Box className={classes.formContainer}>
            <Box style={{
              display: 'flex',
              justifyContent: "space-between",
              aligneItem: "center",
              backgroundColor: '#EFEFEF'
            }}
            >
              <Typography variant="h6" gutterBottom className={classes.title}>Direccion de envio</Typography>
              <FormGroup className={classes.title}>
                <FormControlLabel control={<Checkbox />} label="Usar direccion de facturacion" />
              </FormGroup>
            </Box>
            <Box className={classes.container}>
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Pais</Typography>
                <TextField label="Pais" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Ciudad</Typography>
                <TextField label="Ciudad" />
              </FormControl >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Provincia</Typography>
                <TextField label="Provincia" />
              </FormControl >
            </Box>
            <Box>
              <FormControl sx={{ ml: 4, width: "93%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Direccion 1</Typography>
                <TextField label="Direccion" />
              </FormControl >
            </Box>
            <Box>
              <FormControl sx={{ ml: 4, width: "93%" }} variant="outlined">
                <Typography variant="h6" display="block" gutterBottom>Direccion 2 / (Opcional)</Typography>
                <TextField label="Direccion" />
              </FormControl >
            </Box>
          </Box>
        </Box>
        <Box className={classes.formMark}>
          <Box className={classes.formContainer}>
            <Typography variant="h6" gutterBottom className={classes.title}>Esto es de WEBSITES-16 / Preferencias de Marketing </Typography>
            <Box className={classes.containerMarketing}>
              <Box>
                <Button type="submit" variant="contained" style={{ backgroundColor: 'black' }}>
                  Guardar
                </Button>
              </Box>
              <Box>
                <Button variant="contained" style={{ backgroundColor: 'red' }}>
                  Cancelar
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default FormClient;
