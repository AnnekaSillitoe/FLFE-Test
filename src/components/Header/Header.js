import React from "react";
import PropTypes from "prop-types";

const Header = ({ onClick }) => {
  return (
    <header className="header">
      <button className="header-admin-button" onClick={onClick}>
        <div className="icon icon-pull" />
      </button>
      <h1 className="header-title">FutureLearn</h1>
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Header;
