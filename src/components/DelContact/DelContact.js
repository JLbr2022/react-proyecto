import React, { useState } from "react";

// import Contact from "../Contacts/Contact";

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
