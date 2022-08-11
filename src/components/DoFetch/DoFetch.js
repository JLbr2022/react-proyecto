import React, { useState, useEffect } from "react";
import App from "../../App";
import Contact from "../Contacts/Contact";

function DoFetch() {
  const [formBotton, setFormBotton] = useState("");
  const [contacts, setContacts] = useState([]);

  setFormBotton.value = "Add Contact";

  const fetchContacts = () => {
    fetch("http://localhost:4000/contacts/")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <Contact contact={contacts} setFormBotton={setFormBotton} />
    </div>
  );
}
export default DoFetch;
