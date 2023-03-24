import PropTypes from 'prop-types';

export const Filter = ({ filter, filterChange }) => {
    return (
        <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="name"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={filterChange}
        /> 
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,   
}