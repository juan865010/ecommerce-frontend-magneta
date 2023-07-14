import useStyles from './confirm.styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Confirm = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <Typography variant="h5" gutterBottom>
        Datos
    </Typography>
        <div className={classes.wrapper}>
            <div>
                <div className={classes.textContainer}>
                <Typography variant="h6" gutterBottom>
                    Numero de seguimiento
                </Typography>
                <Typography variant="subtitle2" component="subtitle2">
                    OPCIONES DE ENTREGA
                </Typography>
                </div>
                <div className={classes.textContainer}>
                <Typography variant="h6" gutterBottom>
                    CORREO
                </Typography>
                <Typography variant="subtitle2" component="subtitle2">
                    DIRECIONE DE ENTREGA
                </Typography>
                </div>
                <div className={classes.textContainer}>
                <Typography variant="h6" gutterBottom>
                    METODO DE PAGO
                </Typography>
                <Typography variant="subtitle2" component="subtitle2">
                    Mastercard********7875
                </Typography>
                </div>
                <div className={classes.textContainer}>
                <Typography variant="h6" gutterBottom>
                    FECHA
                </Typography>
                <Typography variant="subtitle2" component="subtitle2">
                    Octuber 8,2020
                </Typography>
                </div>
            </div>
            <div>
            <div className={classes.textContainer}>
                <Typography variant="h6" gutterBottom>
                    OPCIONES DE ENTREGA
                </Typography>
                <Typography variant="subtitle2" component="subtitle2">
                    Standard delivery
                </Typography>
                </div>
                <div className={classes.textContainer}>
                <Typography variant="h6"  gutterBottom>
                    DIRECION DE ENTREGA
                </Typography>
                <Typography variant="subtitle2" display="block"  component="subtitle2">
                    <p>Kristian Holst 34</p>
                    <p>old street W1F</p>
                    <p>7NU London</p>
                    <p>united kindom</p>

                </Typography>
                </div>
                <div className={classes.textContainer}>
                <Typography variant="h6" gutterBottom>
                    TELEFONO
                </Typography>
                <Typography variant="subtitle2" component="subtitle2">
                    +44 8749790988
                </Typography>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Confirm;
