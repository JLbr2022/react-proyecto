import React from "react";

function DelContact(id, fetchContacts) {
  fetch(`http://localhost:4000/contacts/${id}`, {
    method: "DELETE",
  }).then((result) => {
    result.json().then((resp) => {
      fetchContacts();
    });
  });
}

export default DelContact;
