import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import useStyles from "./OrderSend.styles";
const OrderSend = () => {
  const classes = useStyles();
  return (
  <div className={classes.wrapper}>
    <h2>Pedido</h2>
      <CardContent className={classes.card}>
        <div className={classes.containerData}>
          <Typography sx={{ fontSize: 14 }}  gutterBottom>
            PRODUCTOS
          </Typography>
          <Typography  component="div">
            TOTAL
          </Typography>
        </div>
        <hr />
        <div className={classes.containerData}>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $64
          </Typography>
        </div>
        <div className={classes.containerData}>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $10
          </Typography>
        </div>
        <div className={classes.containerData}>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $10
          </Typography>
        </div>
        <hr />
        <div className={classes.containerData}>
          <Typography >
            CUPON
          </Typography>
          <Typography variant="body2" color="text.secondary">
            H2HSGRB3
          </Typography>
          <Typography variant="body2" color="text.secondary">
            -$4
          </Typography>
        </div>
        <hr />
        <div className={classes.containerData}>
          <Typography >
            SUBTOTAL
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $84
          </Typography>
        </div>
        <hr />
        <div className={classes.containerData}>
          <Typography >
            ENVIO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            STANDAR
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $20
          </Typography>
        </div>
        <div className={classes.containerData} style={{marginTop: '3rem'}}>
          <Typography gutterBottom variant="h5">
            TOTAL
          </Typography>
          <Typography gutterBottom variant="h5">
            $100
          </Typography>
        </div>
        <button className={classes.button}>CONTINUAR</button>

      </CardContent>
  </div>
  );
};

export default OrderSend;
