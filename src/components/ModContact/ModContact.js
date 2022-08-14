import React from "react";
import { useState } from "react";
import App from "../../App";

// FUNCTION MODIFY CONTACT Part 1: Loading reg to update contact
const ModContact = (
  contacId,
  setIsUpdate,
  setName,
  setPhone,
  fetchContacts
) => {
  fetch(`http://localhost:4000/contacts/${contacId}`)
    .then((response) => response.json())
    .then((contact) => {
      setIsUpdate(contacId);
      setName(contact.name);
      setPhone(contact.phone);
    });
};

export default ModContact;
