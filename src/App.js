import React, { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contacts/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const url = "http://localhost:4000/contacts/";
  const [contacts, setContacts] = useState([]);
  const [formBotton, setFormBotton] = useState("");

  setFormBotton.value = "Add Contact";

  const fetchContacts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <Contact
        contact={contacts}
        setFormBotton={setFormBotton}
        fetchContacts={fetchContacts}
      />
    </div>
  );
}

export default App;
