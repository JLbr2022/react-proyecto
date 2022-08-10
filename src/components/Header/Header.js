import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import "./Header.css";
import Contact from "../Contacts/Contact";

function Header({ handleSearch }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h1 className="text-uppercase">Contact Book</h1>
          </a>
          <Input
            className="searchInput"
            type="search"
            name="seek"
            placeholder="search contact"
            onChange={handleSearch}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
