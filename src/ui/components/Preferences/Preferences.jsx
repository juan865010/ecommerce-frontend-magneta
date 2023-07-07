import React, { useState } from 'react';
import useStyles from './Preferences.style';
import { Box,Typography } from '@material-ui/core'; 

const Preferences = () => {
    
    const classes = useStyles();

    const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

    const handleEtiquetaSeleccionada = (etiqueta) => {
        if (etiquetasSeleccionadas.includes(etiqueta)) {
        setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((e) => e !== etiqueta));
        } else {
        setEtiquetasSeleccionadas([...etiquetasSeleccionadas, etiqueta]);
        }
    };
  return (
    <Box className={classes.wrapper}>
        <Box className={classes.boxMark}>
            <Typography className={classes.titleMark}>Preferencias de Marketing</Typography>
        </Box>  
      <Box className={classes.containerSelc}>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('folletos')}
          onChange={() => handleEtiquetaSeleccionada('folletos')}
        />
        Folletos
      </Typography>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('email')}
          onChange={() => handleEtiquetaSeleccionada('email')}
        />
        Email
      </Typography >
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('descuentos')}
          onChange={() => handleEtiquetaSeleccionada('descuentos')}
        />
        Descuentos
      </Typography>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('publicidad')}
          onChange={() => handleEtiquetaSeleccionada('publicidad')}
        />
        Publicidad
      </Typography>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('promociones')}
          onChange={() => handleEtiquetaSeleccionada('promociones')}
        />
        Promociones
      </Typography>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('cupones')}
          onChange={() => handleEtiquetaSeleccionada('cupones')}
        />
        Cupones
      </Typography>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('ofertas')}
          onChange={() => handleEtiquetaSeleccionada('ofertas')}
        />
        Ofertas
      </Typography>
      <Typography className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('todos')}
          onChange={() => handleEtiquetaSeleccionada('todos')}
        />
        Todos
      </Typography>

      </Box>  
      <Box className={classes.buttonContainer}>
      <button className={`${classes.button} ${classes.saveButton}`} type="submit">
        Guardar
      </button>
      <button className={`${classes.button} ${classes.cancelButton}`} type="button">
        Cancelar
      </button>
      </Box>
    </Box>
  )
}

export default Preferences