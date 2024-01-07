import { useSelector } from 'react-redux';

const initState = {
  name: '',
  number: '',
};

const checkContact = (contacts, newContact) => {
  return contacts.find(
    el => el.name.toLowerCase() === newContact.name.toLowerCase());
};

const ContactsForm = ({ addContact, saveContact }) => {

  const { contact, contacts } = useSelector(state => state.contacts);
  const handleChange = ({ target: { value, name } }) => {
    saveContact({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkContact(contacts, contact)) {
      alert('error');
      saveContact(initState);
      return;
    }
    addContact(contact);
    saveContact(initState);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <span>Name: </span>
        <input type="text"
               name="name"
               value={contact.name}
               onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <span>Number: </span>
        <input type="tel"
               name="number"
               value={contact.number}
               onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
      <hr />
    </form>
  );
};

export { ContactsForm };
