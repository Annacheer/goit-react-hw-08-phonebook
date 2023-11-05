import React from 'react';
import { Item } from './ContactPerson.styled';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
      contrastText: '#fff',
    },
  },
});

const ContactPerson = ({ contact, onDelete }) => (
  <ThemeProvider theme={theme}>
    <Item>
      {contact.name}: {contact.number}
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </Item>
  </ThemeProvider>
);

export default ContactPerson;
