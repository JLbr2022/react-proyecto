import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import Contact from "./components/Contacts/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
// import Fetchdb from "./components/Fetchdb/Fetchdb";

function App() {
  const url = "http://localhost:4000/contacts";
  const [contacts, setContacts] = useState([]);
  const [formBotton, setFormBotton] = useState("");

  const fetchContacts = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  // useEffect(() => {
  //   Fetchdb();
  // }, []);
  setFormBotton.value = "Add";
  return (
    <div>
      <Header />
      {/* <AddContact /> */}
      <Contact contact={contacts} setFormBotton={setFormBotton} />
      {/* <DelContact /> */}
    </div>
  );
}

export default App;
