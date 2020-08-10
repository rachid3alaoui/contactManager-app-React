import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../Contexts/Context';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Context.Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {' '}
                {name}{' '}
                <i
                  style={{ cursor: 'pointer' }}
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                />
                <i
                  className="fas fa-trash"
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: '#DD4445',
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'blue',
                      marginRight: '10px',
                    }}
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email : {email} </li>
                  <li className="list-group-item">Phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

Contact.defaultProps = {
  name: 'Contact name',
  email: 'Contact email',
  phone: 'Contact phone',
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
