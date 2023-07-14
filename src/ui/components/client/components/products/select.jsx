import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '263px',
    height: '53px',
    minWidth: "200px",
    margin: theme.spacing(1),
    border: '2px solid #D8D8D8',
    borderRadius: '4px',
    padding: theme.spacing(1),
    '& .MuiInput-underline:before': {
      display: 'none',
    },
  },
  selectIcon: {
    fontSize: '1rem',
  },
}));

const MyComponent = ({ onChange }) => {
  const classes = useStyles();
  const [selectedName, setSelectedName] = useState('');

  const handleNameChange = (event) => {
    const name = event.target.value;
    setSelectedName(name);
    onChange(name);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel disableUnderline>Filtrar por</InputLabel>
      <Select
        value={selectedName}
        onChange={handleNameChange}
        IconComponent={KeyboardArrowDownIcon}
        IconProps={{ className: classes.selectIcon }}
      >
        <MenuItem value="">Todos</MenuItem>
        <MenuItem value="">Carteras</MenuItem>
        <MenuItem value="">Bolsos</MenuItem>
        <MenuItem value="">Bolsones</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MyComponent;
