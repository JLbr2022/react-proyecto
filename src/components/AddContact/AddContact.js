import React, { useState, useEffect } from "react";
import "./AddContact.css";
// import DoFetch from "../DoFetch/DoFetch";
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

function AddContact({
  onUpdate,
  isUpdate,
  nameup,
  phoneup,
  setFormBotton,
  setDoRefresh,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const response = await fetch(`http://localhost:4000/contacts/${isUpdate}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        phone: phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setIsPending(false);
      setDoRefresh(true);
    }
  };

  useEffect(() => {
    if (isUpdate) {
      setName(nameup);
      setPhone(parseInt(phoneup));
      setFormBotton.value = "Save Contact";
    }
  }, [isUpdate, nameup, phoneup]);

  function handleNewReg(e) {
    e.preventDefault();
    const newContact = { name, phone };
    setIsPending(true);

    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    }).then(() => {
      console.warn("CONTACT ADDED ", newContact);
      setIsPending(false);
      setDoRefresh(true); // refresh the list of contacts
    });
  }
  return (
    <Container>
      <Form
        className="mt-4"
        inline
        onSubmit={!isUpdate ? handleNewReg : handleUpdate}
      >
        <Row>
          <Col>
            <FormGroup floating>
              <Input
                id="contactEmail"
                name="name"
                placeholder="contact name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="exampleName">Name</Label>
            </FormGroup>
          </Col>{" "}
          <Col>
            <FormGroup floating>
              <Input
                id="contactPhone"
                name="phone"
                value={phone}
                placeholder="contact phone"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Label for="examplePhone">Phone</Label>
            </FormGroup>
          </Col>
        </Row>{" "}
        {!isPending && (
          <Button
            className="buttonForm mt-2"
            color="success"
            block
            type="submit"
          >
            {setFormBotton.value}
          </Button>
        )}
        {isPending && (
          <Button block type="submit" disabled className="mt-2">
            Saving...
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default AddContact;
