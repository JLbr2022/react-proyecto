import React from "react";
import { useState } from "react";
import App from "../../App";

// FUNCTION MODIFY CONTACT
const ModContact = (
  contacId,
  setIsUpdate,
  setName,
  setPhone,
  fetchContacts
) => {
  console.log("🚀 ~ file: ModContact.js ~ contacId", contacId);
  fetch(`http://localhost:4000/contacts/${contacId}`)
    .then((response) => response.json())
    .then((contact) => {
      setIsUpdate(contacId);
      setName(contact.name);
      setPhone(contact.phone);
    });
  return;
  // };
};

export default ModContact;
