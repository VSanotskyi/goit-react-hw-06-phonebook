import { ContactsForm } from '../ContactsForm/ContactsForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction, removeContactAction, saveContactAction, setFilterAction,
} from '../../store/contactsSlice/contactsSlice';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { ContactsSearchForm } from '../ContactsSearchForm/ContactsSearchForm';

const filterContacts = (contacts, filter) => {
  return contacts.length > 0 && filter
    ? contacts.filter(
      el => el.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;
};

const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const saveContact = (data) => {
    dispatch(saveContactAction(data));
  };
  const addContact = (data) => {
    dispatch(addContactAction(data));
  };

  const removeContact = (id) => {
    dispatch(removeContactAction(id));
  };

  const searchContact = (search) => {
    dispatch(setFilterAction(search));
  };

  const contactsArrayForRender = filterContacts(contacts, filter);

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <ContactsForm addContact={addContact}
                      saveContact={saveContact}
        />
      </div>
      {
        contacts.length > 0 ?
          <div>
            <ContactsSearchForm
              searchContact={searchContact}
              filter={filter}
            />
            {
              contactsArrayForRender.length > 0
                ? <ul>
                  {
                    contactsArrayForRender.map(el =>
                      <ContactsItem
                        key={el.id}
                        contact={el}
                        removeContact={removeContact}
                      />)
                  }
                </ul>
                : <p>not defined</p>
            }
          </div> : <p>no contacts</p>
      }
    </div>
  );
};

export { ContactsList };
