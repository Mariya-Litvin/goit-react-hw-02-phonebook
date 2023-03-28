import { nanoid } from 'nanoid';

import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      filter: this.state.name,
      number: this.state.number,
      name: this.state.name,
      id: nanoid(),
    };

    let updatedContacts;
    const newContactName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (newContactName) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      updatedContacts = [...this.state.contacts, newContact];
    }
    this.setState({
      contacts: updatedContacts,
      name: '',
      number: '',
      filter: '',
    });
  };

  handleFindName = evt => {
    const { value } = evt.target;
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ filter: value, filteredContacts });
    // console.log(this.state);
  };

  render() {
    const contacts = this.state.filter
      ? this.state.filteredContacts
      : this.state.contacts;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              placeholder="Enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <p>Find Contacts by name</p>
          <label>
            <input
              type="text"
              name="filter"
              onChange={this.handleFindName}
              value={this.state.filter}
            />
          </label>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button type="button">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
