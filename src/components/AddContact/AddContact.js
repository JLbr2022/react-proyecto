import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import { useState } from "react";
// import Fetchdb from "../Fetchdb/Fetchdb";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);

  function handleNewReg(e) {
    e.preventDefault();
    const newContact = { name, phone };
    // e.target.name.value = " ";
    // e.phone.value = 0;

    setIsPending(true);

    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    }).then(() => {
      console.warn("ADDED ", newContact);
      setIsPending(false);
    });
    // Fetchdb(); x cvf rfhgt6ju67g
  }

  return (
    <Container>
      {/* <h3>New Contact</h3> */}
      <Form inline onSubmit={handleNewReg}>
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="contactEmail"
                name="email"
                placeholder="contact name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="exampleEmail">Name</Label>
            </FormGroup>
          </Col>{" "}
          <Col>
            {/* <FormGroup className="mb-2 me-sm-2 mb-sm-0"> */}
            <FormGroup floating>
              <Input
                id="contactPhone"
                name="phone"
                placeholder="contact phone"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Label for="examplePassword">Phone</Label>
            </FormGroup>
          </Col>
        </Row>{" "}
        {!isPending && (
          <Button block type="submit">
            Add Contact
          </Button>
        )}
        {isPending && (
          <Button block type="submit" disabled>
            Saving...
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default AddContact;
