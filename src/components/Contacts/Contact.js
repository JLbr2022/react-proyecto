// import React, { useEffect, useReducer, useState } from "react";
import React from "react";
import DelContact from "../DelContact/DelContact";
import { Table, Button, ButtonGroup } from "reactstrap";

const Contact = ({ contact, id }) => {
  function ModContact(id) {
    console.log("MODDED");
  }

  return (
    <div className="container">
      <Table hover striped responsive>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
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
                  <Button onClick={() => ModContact(contact.id)}>MOD</Button>
                  <Button onClick={() => DelContact(contact.id)}>DEL</Button>
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
