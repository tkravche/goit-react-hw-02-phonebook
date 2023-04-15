export const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      <li>
        {name}: {number}
      </li>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </>
  );
};
