import PropTypes from 'prop-types';

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

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };