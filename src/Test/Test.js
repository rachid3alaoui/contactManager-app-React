import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/10')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          body: data.body,
        })
      );
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1> Test Component </h1>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    );
  }
}
