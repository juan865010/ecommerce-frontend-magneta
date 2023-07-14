import useStyles from "./CheckForm.styles";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {ReactComponent as CardDebit} from "../../../../assets/icons/Card-Front.svg";
import {ReactComponent as MasterCard} from "../../../../assets/icons/Mastercard.svg";
import {ReactComponent as AlertInput} from "../../../../assets/icons/Input right section.svg";
import {ReactComponent as PayPal} from "../../../../assets/icons/Icon color.svg";
import {ReactComponent as ApplePay} from "../../../../assets/icons/Vector.svg";


const CheckForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h2>Verificar</h2>
      <Card className={classes.cardForm}>
        <CardContent className={classes.card}>
          <CardDebit className={classes.iconCard} />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Numero De tarjeta</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="end">**** **** **** ****</InputAdornment>}
            endAdornment={<InputAdornment position="end"><MasterCard /></InputAdornment>}
            
            label="Amount"
          />
        </FormControl>
        <div className={classes.dataCardDebit}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Mes</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="end">12</InputAdornment>}
              label="Amount"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Año</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="end">0000</InputAdornment>}
              label="Amount"
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">CVC</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="end">***</InputAdornment>}
              endAdornment={<InputAdornment position="end"><AlertInput /></InputAdornment>}
              label="Amount"
            />
          </FormControl>
        </div>
    <div className={classes.radioContainer}>
    <FormControl >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div className={classes.radio} ><FormControlLabel value="PayPal" control={<Radio />} label={`PayPal`} /><PayPal style={{marginLeft: '-10px'}} /></div>
          <div className={classes.radio} ><FormControlLabel value="ApplePay" control={<Radio />} label="ApplePay" /><ApplePay style={{marginLeft: '-10px'}}/></div>
        </RadioGroup>
      </FormControl>
    </div>
      </CardContent>
      </Card>
    </div>
  );
};

export default CheckForm;
