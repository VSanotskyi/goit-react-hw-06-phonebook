const ContactsItem = ({ contact, removeContact }) => {
  const { name, number, id } = contact;
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => removeContact(id)}>del</button>
    </li>
  );
};

export { ContactsItem };
