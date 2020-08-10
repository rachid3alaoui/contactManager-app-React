import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { Context } from '../../Contexts/Context';

class Contacts extends Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                Contact <span className="text-danger"> List </span>
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Contacts;
