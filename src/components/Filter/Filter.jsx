import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/phonebook/filterSlice';

export const onFilterChange = value => {
  return {
    type: 'FILTER_CHANGE',
    payload: value,
  };
};

const Filter = () => {
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setLocalFilter(value);
    dispatch(setFilter(value));
  };

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            background: '#F5F5F5',
            borderRadius: '4px',
            width: '300px',
          },
        },
      },
    },

    palette: {
      primary: {
        main: '#1976d2',
        contrastText: '#fff',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Label>
        Find contacts by name
        <TextField
          variant="outlined"
          sx={{
            '& .MuiInputBase-input': {
              padding: '8px',
            },
          }}
          type="text"
          value={localFilter}
          onChange={handleInputChange}
        />
      </Label>
    </ThemeProvider>
  );
};

export default Filter;
