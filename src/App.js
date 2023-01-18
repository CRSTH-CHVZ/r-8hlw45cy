import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isCheck: false,
        }
    }
    isChecked = () => {
        const data = this.state.isCheck;
        this.setState({isCheck: !data})
    }
  render() {
        const isChecked = this.state.isCheck;
        let text;
        if( isChecked ){
            text = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>;
        } else {
            text = "";
        }
    return (
      <div className="wrapper">
        <label><input type="checkbox"
        onClick={this.isChecked}
        /> Mostrar información importante</label>

          {
              text
          }
      </div>
    );
  }
}

export default App;
