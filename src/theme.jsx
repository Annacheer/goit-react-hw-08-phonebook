import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          borderRadius: '20px', // Rounded buttons
          padding: '10px 20px',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          },
          fontSize: '1rem', // Increases the font size
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#F5F5F5',
          borderRadius: '4px',
          margin: '10px 0', // Adds spacing between text fields
          '& label.Mui-focused': {
            color: 'green', // Color of the label on focus
          },
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

export default theme;
