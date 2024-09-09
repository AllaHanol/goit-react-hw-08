import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contacts/slice";

import { apiDeleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return;
  }

  return (
    <ul >
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
