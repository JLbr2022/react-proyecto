import React, { useEffect, useState } from "react";
import DoFetch from "../DoFetch/DoFetch";

// import Contact from "../Contacts/Contact";

function DelContact(id, fetchContacts) {
  fetch(`http://localhost:4000/contacts/${id}`, {
    method: "DELETE",
  }).then((result) => {
    result.json().then((resp) => {
      console.warn("DELETED ", resp);
      fetchContacts();
    });
  });
}

export default DelContact;
