import react from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./components/Contacts/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const initialUrl = "http://localhost:4000/contacts";

  const fetchContacts = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchContacts(initialUrl);
  }, []);

  return (
    <div>
      <Header />
      <h4>Contact List</h4>
      <Contact contact={contacts} />
    </div>
  );
}

export default App;