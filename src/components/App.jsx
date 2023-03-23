import React from 'react';
import ContactForm from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

class App extends React.Component {

  state = {
    contacts: [],
    filter: '',
  }  

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }  
  
  formSubmitHandler = data => {
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] }
    }); 
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>        
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterChange={this.filterChange} />
        
        <ContactList visibleContacts={visibleContacts}/>           
      </div>
    );
  }  
};

export default App;
