import React from "react";

const ModContact = ({ contact, id }) => {
  fetch(`http://localhost:4000/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: contact.id,
      phone: contact.phone,
      name: contact.name,
    }),
  });
  console.log("MODDED ", id);
  return <></>;
};

export default ModContact;
