import React, { Component} from 'react';

// App component - represents the whole app
export default class AppContainer extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    );
  }
}
