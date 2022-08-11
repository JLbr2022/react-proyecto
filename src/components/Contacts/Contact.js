// import React, { useEffect, useReducer, useState } from "react";
import React, { useState } from "react";
import { Table, Button, ButtonGroup, From } from "reactstrap";
import DelContact from "../DelContact/DelContact";
import AddContact from "../AddContact/AddContact";
import Modal from "../Modal/Modal"; // currently in construction
import Header from "../Header/Header";

const Contact = ({ contact, id, setFormBotton, setDoRefresh }) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [contacId, setContactId] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  let setHandle = false;

  const handleSubmit = (e) => {
    <Modal />;
    e.preventDefault();
  };

  const handleUpdate = (contacId) => {
    fetch(`http://localhost:4000/contacts/${contacId}`)
      .then((response) => response.json())
      .then((contact) => {
        setIsUpdate(contacId);
        setName(contact.name);
        setPhone(contact.phone);
      });
    return;
  };

  const handleModal = (setHandle) => {
    if (setHandle) {
      console.log("CALL Modal.js");

      <Modal />;
    } else {
      console.log("MODAL TYPE FALSE for MODIFY USER");
    }
  };

  // ============ SEARCH FUNCTION: filter list  ===========
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  let results = !searchTerm // modifiqué contact por results
    ? contact
    : contact.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  console.log(results);

  return (
    <div className="container">
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />

      <AddContact
        isUpdate={isUpdate}
        nameup={name}
        phoneup={phone}
        setFormBotton={setFormBotton}
        setDoRefresh={setDoRefresh}
      />

      <Table className="mt-4" size="md" bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((results, index) => (
            <tr key={index}>
              <td>{results.id}</td>
              <td>{results.name}</td>
              <td>{results.phone}</td>
              <td>
                <ButtonGroup>
                  <Button onClick={() => handleUpdate(results.id)}>MOD</Button>
                  <Button onClick={() => DelContact(results.id, setDoRefresh)}>
                    DEL
                  </Button>
                  <Button
                    className="openModalBotton"
                    onClick={handleModal(true)}
                  >
                    lauch Modal
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Contact;
