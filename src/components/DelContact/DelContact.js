import React, { useState } from "react";

// import Contact from "../Contacts/Contact";

// function Fetchdb() {
// const [contact, setContacts] = useState([]);

//   const url = "http://localhost:4000/contacts";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => setContacts(data));
// }

// Fetchdb();

function DelContact(id) {
  fetch(`http://localhost:4000/contacts/${id}`, {
    method: "DELETE",
  }).then((result) => {
    result.json().then((resp) => {
      console.warn("DELETED ", resp);
    });
  });
}

export default DelContact;

// function DelContact(id) {

//   const [contact, setContacts] = useState([]);

//   const result = fetch(`http://localhost:4000/contacts/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id }),
//   });

//   const newContactList = result.json();
//   setContacts((oldContactList) => [...oldContactList, newContactList]);
// }

// export default DelContact;
