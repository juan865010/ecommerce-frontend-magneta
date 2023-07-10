import React from 'react'
import {Box} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {Divider} from '@material-ui/core'
import {FormGroup} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Checkbox} from '@material-ui/core'
import {FormControl} from '@material-ui/core'
import {Slider} from '@material-ui/core';
import useStyles from './FiltrarPedidos.style'
import {SvgIcon} from '@material-ui/core';
import { addDays,format } from 'date-fns';
import { useState,useEffect } from 'react';
import { Calendar, DateRange } from 'react-date-range'
<<<<<<< HEAD
// 

=======
import {BottomNavigation} from '@material-ui/core';
import {BottomNavigationAction} from '@material-ui/core';
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0


function valuetext(value) {
  return `${value}`;
}
const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];
const FiltrarPedidos = () => {
  
const classes=useStyles();

const [value, setValue] = React.useState([0, 30]);

const handleChanges = (event, newValue) => {
  setValue(newValue);
};

<<<<<<< HEAD
  const IconLinear=(props)=>{
    return (
      <SvgIcon {...props}>
        <path d="M5.71436 7.85715L10.0001 12.1429L14.2858 7.85715" stroke="#54595E" stroke-linecap="round" stroke-linejoin="round"/>
=======
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine ,alex,roma} = state;
  const IconLinear=(props)=>{
    return (
      <SvgIcon {...props}>
        <path d="M0.714355 0.857147L5.00007 5.14286L9.28578 0.857147" stroke="#54595E" stroke-linecap="round" stroke-linejoin="round"/>
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
      </SvgIcon>
    );
  }
  
  
  const IconCalendar=(props)=>{
    return (
      <SvgIcon {...props}>
          <path d="M9.5715 0.571442V3.14287M4.42864 0.571442V3.14287M1.21436 5.7143H12.7858M2.50007 1.85716H11.5001C12.2102 1.85716 12.7858 2.43279 12.7858 3.14287V12.1429C12.7858 12.853 12.2102 13.4286 11.5001 13.4286H2.50007C1.78999 13.4286 1.21436 12.853 1.21436 12.1429V3.14287C1.21436 2.43279 1.78999 1.85716 2.50007 1.85716Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
      </SvgIcon>
    );
  }
//fecha
  const [range, setRange] = useState([{
    startDate: new Date(),
    endDate: addDays(new Date(),7),
    key:"selection"
  }]);
  const [calendar, setCalendar] = useState(format(new Date(),"dd-MM-yyyy"));
  const[isOpen, setIsOpen]=useState(false);
<<<<<<< HEAD

 const calendarSelect = (event)=>{
    console.log('abierto');
    setIsOpen(true);
 }
 const calendarClose=(event)=>{
  console.log('cerrado');
  setIsOpen(false);
 }
=======
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
  const handleSelect = (date)=>{
    console.log(date);
    setCalendar(format(date,"dd-MM-yyyy"));
   };

   const [values, setValues] = React.useState(0);
<<<<<<< HEAD

   const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

   const handleEtiquetaSeleccionada = (etiqueta) => {
       if (etiquetasSeleccionadas.includes(etiqueta)) {
       setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((e) => e !== etiqueta));
       } else {
       setEtiquetasSeleccionadas([...etiquetasSeleccionadas, etiqueta]);
       }
   };
  return (
    <Box className={classes.container}>
      <Box className={classes.boxTitle}>
=======
  return (
    <Box className={classes.container}>
      <Box className={classes.title}>
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
        <Typography className={classes.textoTitle}>Filtrar
          <svg className={classes.icons}
            viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0002 0.666664H1.00016C0.823352 0.666664 0.653782 0.736902 0.528758 0.861926C0.403734 0.986951 0.333496 1.15652 0.333496 1.33333V2.44666C0.333621 2.60412 0.364905 2.76 0.425547 2.90531C0.486189 3.05062 0.574989 3.18249 0.686829 3.29333L8.3335 11.0533V17.8533L9.66683 18.36V10.6667C9.66734 10.5789 9.65052 10.492 9.61734 10.4107C9.58417 10.3295 9.53528 10.2556 9.47349 10.1933L1.66683 2.39333V2H20.3335V2.40666L12.5535 10.1933C12.4869 10.2534 12.433 10.3262 12.3952 10.4076C12.3574 10.4889 12.3364 10.577 12.3335 10.6667V19.4733L13.6668 20V11L21.3135 3.33333C21.4271 3.21968 21.5169 3.08448 21.5776 2.93565C21.6383 2.78682 21.6686 2.62737 21.6668 2.46666V1.33333C21.6668 1.15652 21.5966 0.986951 21.4716 0.861926C21.3465 0.736902 21.177 0.666664 21.0002 0.666664Z" fill="black"/>
          </svg>
<<<<<<< HEAD
          <Divider className={classes.hrTitle}/>
        </Typography>
        
      </Box>
      
      <Box className={classes.todoComponents}>
            <Typography className={classes.titleOpcionesCategori}>Categoria</Typography>
  
            <Box className={classes.boxCategoria}>
            <Typography className={classes.opcionesCategoritexto1}>
              <input
                type="checkbox"
                checked={etiquetasSeleccionadas.includes('iphones')}
                onChange={() => handleEtiquetaSeleccionada('iphones')}
              />
              iphones
            </Typography>
            <Typography className={classes.opcionesCategoritexto2}>
              <input
                type="checkbox"
                checked={etiquetasSeleccionadas.includes('cocinas')}
                onChange={() => handleEtiquetaSeleccionada('cocinas')}
              />
              Cocinas
            </Typography >
            <Typography className={classes.opcionesCategoritexto3}>
              <input
                type="checkbox"
                checked={etiquetasSeleccionadas.includes('bolsos')}
                onChange={() => handleEtiquetaSeleccionada('bolsos')}
              />
              Bolsos
            </Typography>
            </Box>
            
       
        <Divider className={classes.hrTitle}/>

        <Box className={classes.boxFecha}>
          <Typography className={classes.LetrasFecha}>Seleccionar Fecha</Typography>
          <Box className={classes.boxCalendar}>
              <IconCalendar className={classes.IconCalendar} onClick={calendarSelect}/>
              <Typography className={classes.boxLetras} onChange={handleSelect} >
                      {`${format(range[0].startDate,"dd/MM/yyyy")} - ${format(range[0].endDate,"dd/MM/yyyy")}`}
              </Typography>
              <IconLinear className={classes.IconClose} onClick={calendarClose}/>
=======
        </Typography>
      </Box>
      
      <Divider className={classes.hr}/>
        <Box>
        <FormControl sx={{ m: 3,}} component="fieldset" variant="standard">
        
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" color='default'/>
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" color='default'/>
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" color='default' />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
        </Box>
      <Divider className={classes.hr}/>
      
        <Typography className={classes.LetrasFecha}>Seleccionar Fecha</Typography>
        <Box className={classes.boxCalendar}>
              <BottomNavigation
                    className={classes.IconCalendario}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      console.log(setValue);
                      setIsOpen(true)
                    }}
              >
                
                <BottomNavigationAction className={classes.IconCalendar} icon={<IconCalendar />} />
              </BottomNavigation>
              <Typography className={classes.boxLetras} onChange={handleSelect} >
                
                      {`${format(range[0].startDate,"dd/MM/yyyy")} - ${format(range[0].endDate,"dd/MM/yyyy")}`}
              </Typography>
            <BottomNavigation
                className={classes.IconSelect}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  console.log(setValue);
                  setIsOpen(false)
                }}
              >
                <BottomNavigationAction  icon={<IconLinear />} />
                
              </BottomNavigation>
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
            {isOpen && 
            (
            <DateRange
              onChange={(item)=>setRange([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
<<<<<<< HEAD
              months={1}
              direction="vertical"
            />) }
        </Box>
 
        </Box>
        <Divider className={classes.hrFecha}/>
        <Box className={classes.todoMaterial}>
              <Typography className={classes.todoMaterialTitle}>Material</Typography>
              <Box className={classes.boxMaterial}>
                <Typography className={classes.opcionesMaterialtexto1}>
                  <input
                    type="checkbox"
                    checked={etiquetasSeleccionadas.includes('metals')}
                    onChange={() => handleEtiquetaSeleccionada('metals')}
                  />
                  Metals
                </Typography>
                <Typography className={classes.opcionesMaterialtexto1}>
                  <input
                    type="checkbox"
                    checked={etiquetasSeleccionadas.includes('plastic')}
                    onChange={() => handleEtiquetaSeleccionada('plastic')}
                  />
                  Plastic
                </Typography >
                <Typography className={classes.opcionesMaterialtexto2}>
                  <input
                    type="checkbox"
                    checked={etiquetasSeleccionadas.includes('glass')}
                    onChange={() => handleEtiquetaSeleccionada('glass')}
                  />
                  Glass
                </Typography>
                <Typography className={classes.opcionesMaterialtexto2}>
                  <input
                    type="checkbox"
                    checked={etiquetasSeleccionadas.includes('ceramic')}
                    onChange={() => handleEtiquetaSeleccionada('ceramic')}
                  />
                  Ceramic
                </Typography>
                <Typography className={classes.opcionesMaterialtexto3}>
                  <input
                    type="checkbox"
                    checked={etiquetasSeleccionadas.includes('minerals')}
                    onChange={() => handleEtiquetaSeleccionada('minerals')}
                  />
                  Minerals
                </Typography >
                <Divider className={classes.hrMaterial}/>
            </Box>
            <Typography className={classes.textCantidad}>Cantidad</Typography>
        </Box>
        
      </Box>
  
      <Box className={classes.boxSlider}>
        
=======
              months={2}
              direction="vertical"
            />) }
        </Box>
      
      <Divider className={classes.hr}/>

      <Typography>Material</Typography>
      <Box>
      <FormControl sx={{ m: 3, color:'primary' }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" color='default' />
            }
            label="Metails"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" color='default' />
            }
            label="Plastic"
          />
          <FormControlLabel
            control={
              <Checkbox checked={roma} onChange={handleChange} name="roma" color='default'/>
            }
            label="Glass"
          />
          <FormControlLabel
            control={
              <Checkbox checked={alex} onChange={handleChange} name="alex" color='default'/>
            }
            label="Ceramic"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" color='default'/>
            }
            label="Minerals"
          />
        </FormGroup>
      </FormControl>
      </Box>
      <Divider className={classes.hr}/>
      <Box className={classes.boxSlider}>
        <Typography id="range-slider" gutterBottom>
          Cantidad
        </Typography>
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
        <Slider
          value={value}
          onChange={handleChanges}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          height={54}
          marks={marks}
          className={classes.Boxsliders}
        />
      </Box>
<<<<<<< HEAD
      
=======
>>>>>>> 4f158bd19a70584a1352ff6855ae646539b582e0
    </Box>
  );
}

export default FiltrarPedidos