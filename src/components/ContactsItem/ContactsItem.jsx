const ContactsItem = ({ contact, removeContact }) => {
  const { name, number, id } = contact;

  const handleClick = () => {
    removeContact(id);
  };
  
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={handleClick}>del</button>
    </li>
  );
};

export { ContactsItem };
