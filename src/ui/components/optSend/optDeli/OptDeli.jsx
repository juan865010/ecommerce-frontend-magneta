import useStyles from "./optDeli.styles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { ReactComponent as Bus } from "../../../../assets/icons/bus.svg";

const SendInitialOrder = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <h2>VERIFICAR</h2>
          <h3>Opciones de Entrega</h3>
        </div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <div className={classes.containerRadio}>
              <div className={classes.radio}>
                <Bus />
                <FormControlLabel value="female" control={<Radio />} label="Estandar 5-7 dias habiles" />
              </div>
              <Typography variant="subtitle2" gutterBottom>FREE</Typography>
            </div>
            <hr className={classes.hr} />
            <div className={classes.containerRadio}>
              <div className={classes.radio}>
                <Bus />
                <FormControlLabel value="male" control={<Radio />} label="2-4 dias habiles" />
              </div>
              <p>10$</p>
            </div>
            <hr className={classes.hr} />
            <div className={classes.containerRadio}>
              <div className={classes.radio}>
                <Bus />
                <FormControlLabel value="other" control={<Radio />} label="Entrega el mismo dia" />
              </div>
              <p>15$</p>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    </>

  );
};

export default SendInitialOrder;

