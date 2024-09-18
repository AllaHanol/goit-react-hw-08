import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import AddContactForm from "../../components/AddContactForm/AddContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";

import {apiGetAllContacts} from "../../redux/contacts/operations";
import {selectUserContacts} from "../../redux/contacts/selectors";

import toast  from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const {contacts, isLoading, error} = useSelector(selectUserContacts);
  

  useEffect(() => {
    dispatch(apiGetAllContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully🎉");
      });
  }, [dispatch]);


  return (
    <div>
      <><h2>Phonebook</h2></>
    
      {isLoading && <Loader />}
      <AddContactForm />
       {error !== null && (
        <p style={{ color: "red" }}>{error} Please, try again later.</p>
      )}

      <SearchBox />
      
      {contacts?.length > 0 ? (<ContactList/>) : (<p>Contacts list is empty</p>) }
      
      <ul>
        {contacts?.length === 0 && <li>Contacts list is empty</li>}
        {Array.isArray(contacts) &&
          contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                <b>{contact.name}</b>: {contact.number}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsPage;

