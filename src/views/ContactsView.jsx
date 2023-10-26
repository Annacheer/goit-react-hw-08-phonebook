import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import { selectLoading } from 'redux/phonebook/selectors';
import { fetchContacts } from 'redux/phonebook/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />

        {isLoadingContacts && <h1>Загружаем...</h1>}
      </div>

      <ContactList />
    </Container>
  );
}
