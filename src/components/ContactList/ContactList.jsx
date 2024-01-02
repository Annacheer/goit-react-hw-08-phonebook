import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/phonebook/operations';
import ContactPerson from 'components/ContactPerson/ContactPerson';
import { selectAllContacts } from 'redux/phonebook/selectors';
import { StyledContactList } from './ContactList.styled';

const ContactList = props => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(state => state.phonebook.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <ContactPerson
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </StyledContactList>
  );
};

export default ContactList;
