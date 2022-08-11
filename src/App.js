import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import Contact from "./components/Contacts/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import DoFetch from "./components/DoFetch/DoFetch";

function App() {
  const url = "http://localhost:4000/contacts/";
  const [contacts, setContacts] = useState([]);
  const [formBotton, setFormBotton] = useState("");

  setFormBotton.value = "Add Contact";

  // const fetchContacts = async () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setContacts(data));
  // };

  // useEffect(() => {
  //   fetchContacts();
  // }, []);

  return (
    <div>
      {/* <DoFetch url={url} /> */}
      <Contact contact={contacts} setFormBotton={setFormBotton} />
    </div>
  );
}

export default App;
