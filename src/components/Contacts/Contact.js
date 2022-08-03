import React from "react";
import { Table, Button, ButtonGroup } from "reactstrap";

const Contact = ({ contact }) => {
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
                  <Button>MOD</Button>
                  <Button>DEL</Button>
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
