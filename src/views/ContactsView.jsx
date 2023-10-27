import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import { selectLoading } from 'redux/phonebook/selectors';
import { fetchContacts } from 'redux/phonebook/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Helmet } from 'react-helmet';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Container>
        <Helmet>
          <h1>Phonebook</h1>
        </Helmet>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />

        <div>{isLoadingContacts && <h1>Request in progress...</h1>}</div>

        <ContactList />
      </Container>
    </>
  );
}
