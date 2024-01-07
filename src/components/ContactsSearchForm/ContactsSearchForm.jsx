const ContactsSearchForm = ({ searchContact, filter }) => {
  const handleChange = ({ target: { value } }) => {
    searchContact(value);
  };

  return (
    <div>
      <label>
        <span>Search contact: </span>
        <input type="text"
               name="name"
               value={filter}
               onChange={handleChange}
        />
      </label>
    </div>
  );
};

export { ContactsSearchForm };
