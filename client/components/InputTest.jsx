import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'react-toolbox/lib/input';

export default class InputTest extends Component {
  constructor(props) {

		super(props);

    this.state = { name: '', phone: '', email: '', hint: '' };

    this.handleChange = (name, value) => {
      this.setState({...this.state, [name]: value});
    }

  }

  render () {
    return (
      <section>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
      </section>
    );
  }
}
