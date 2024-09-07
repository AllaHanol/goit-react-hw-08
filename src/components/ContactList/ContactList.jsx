import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";

// import { contactsArr } from "../../redux/contactsSlice";
import { apiDeleteContact } from "../../redux/contacts/operations";
// import { selectFilter } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
const ContactList = () => {
  const dispatch = useDispatch();

  // const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilter);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredContacts = useSelector(selectFilteredContacts);
  if (filteredContacts.length === 0) {
    return;
  }
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContacts={(contactId) => {
            dispatch(apiDeleteContact(contactId));
            }}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;


