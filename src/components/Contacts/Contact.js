// import React, { useEffect, useReducer, useState } from "react";
import React, { useState } from "react";
import DelContact from "../DelContact/DelContact";
import AddContact from "../AddContact/AddContact";
import Modal from "../Modal/Modal"; // currently in construction
import { Table, Button, ButtonGroup, From } from "reactstrap";

const Contact = ({ contact, id }) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [contacId, setContactId] = useState();
  const [isUpdate, setIsUpdate] = useState();
  let setHandle = false;

  const handleSubmit = (e) => {
    // <Modal />;
    e.preventDefault();
  };

  const handleUpdate = (contacId) => {
    fetch(`http://localhost:4000/contacts/${contacId}`)
      .then((response) => response.json())
      .then((contact) => {
        setIsUpdate(contacId);
        setName(contact.name);
        setPhone(contact.phone);
        console.log("🚀 ~ file: Contact.js ~ line 22 ~ .then ~ data", contact);
      });
  };

  const handleModal = (setHandle) => {
    if (setHandle) {
      console.log("CALL Modal.js");

      // <Modal />;
    } else {
      console.log("MODAL TYPE FALSE for MODIFY USER");
    }
  };

  return (
    <div className="container">
      <AddContact onSubmit={handleSubmit} />
      <Table className="mt-4" size="md" bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contact.map((contact, index) => (
          <tbody key={index}>
            <tr>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <ButtonGroup>
                  <Button onClick={() => handleUpdate(contact.id)}>MOD</Button>
                  <Button onClick={() => DelContact(contact.id)}>DEL</Button>
                  <Button
                    className="openModalBotton"
                    onClick={handleModal(true)}
                  >
                    lauch Modal
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default Contact;
