import React, {Component} from "react";

class DropdownMenu extends Component {
  state = {
    active: ""
  };

  setActive = (e) => {
    e.preventDefault();
    this.setState({
      active: e.target.name
    });
  };

  render() {
    return (
      <div className="dropdown-box">
        <div className="dropdown-triangle"/>
        <div className="dropdown-menu">
          <a href="/" className={`dropdown-header ${this.state.active === "home" ? "active" : ""}`} name="home" onClick={(e) => this.setActive(e)}>
            <div className="icon icon-home"/>
            FutureLearn
          </a>
          <div className="dropdown-main-menu">
            <a href="/" className={`dropdown-item ${this.state.active === "create" ? "active" : ""}`} name="create" onClick={(e) => this.setActive(e)}>
              <div className="icon icon-create"/>
              Course Creator</a>
            <a href="/" className={`dropdown-item ${this.state.active === "admin" ? "active" : ""}`} name="admin" onClick={(e) => this.setActive(e)}>
              <div className="icon icon-admin"/>
              Admin</a>
          </div>
        </div>
      </div>
    );
  }
}

export default DropdownMenu;
