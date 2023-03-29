import PropTypes from 'prop-types';
import { Component } from 'react';
import { ButtonForm, Form, InputForm, LabelForm } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // При вводі у два поля інпуту( name, number) змінюємо значення у state

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onClickSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <LabelForm>
          Name
          <InputForm
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </LabelForm>
        <LabelForm>
          Number
          <InputForm
            type="tel"
            name="number"
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </LabelForm>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
