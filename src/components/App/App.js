import React, { Component } from 'react';
import Header from "../Header/Header";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

class App extends Component {
  state = {
    displayMenu: false
  };

  displayDropdownMenu = () => {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  };

  render() {
    const {displayMenu} = this.state;
    return (
      <div className="App">
        <Header onClick={this.displayDropdownMenu}/>
        {displayMenu &&
          <DropdownMenu/>
        }
      </div>
    );
  }
}

export default App;
