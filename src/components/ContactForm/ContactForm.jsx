import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook/operations';
import { Form, Label, ButtonStyle } from './ContactForm.styled';
import { InputStyle } from 'components/Filter/Filter.styled';
import { selectAllContacts } from 'redux/phonebook/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const handleSubmit = event => {
    event.preventDefault();

    if (
      Array.isArray(contacts) &&
      contacts.find(contact => contact.name === name)
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setFormData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <InputStyle
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <InputStyle
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <ButtonStyle type="submit">Add contact</ButtonStyle>
    </Form>
  );
};

export default ContactForm;
