import React from "react";
import { Table, Button, ButtonGroup } from "reactstrap";

const Contact = ({ contact }) => {
  return (
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
                <Button>ADD</Button>
                <Button>MOD</Button>
                <Button>DEL</Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default Contact;

{
  /* <div classNameName="row">
      {contact.map((contact, index) => (
        <div className="col-sm-6 col-md-6 col-lg-3" key={index}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body ">
              <p className="card-text">
                <strong>Name:</strong> {contact.name}
                <br />
                <strong>Phone:</strong> {contact.phone}
              </p>
            </div>
          </div>
        </div>
      ))}
      { <div classNameName="col"></div> }
    </div> */
}
