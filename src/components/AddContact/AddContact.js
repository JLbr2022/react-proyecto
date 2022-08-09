import React, { useState, useEffect } from "react";
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

// import Fetchdb from "../Fetchdb/Fetchdb";

function AddContact({ onUpdate, isUpdate, nameup, phoneup, setFormBotton }) {
  // console.log(
  //   "🚀 ~ file: AddContact.js ~ line 17 ~ AddContact ~ onUpdate",
  //   onUpdate
  // );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const [formBottom, setFormBotton] = useState("Add"); // true = add contact, false = update contact

  const handleUpdate = async (contactId) => {
    // e.preventDefault();
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
  };

  useEffect(() => {
    if (isUpdate) {
      setName(nameup);
      setPhone(parseInt(phoneup));
      setFormBotton.value = "Save";
    }
  }, [isUpdate, nameup, phoneup]);

  function handleNewReg(e) {
    e.preventDefault();
    const newContact = { name, phone };
    setFormBotton.value = "Add";

    // e.target.name.value = " ";
    // e.phone.value = 0;

    setIsPending(true);

    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    }).then(() => {
      console.warn("CONTACT ADDED ", newContact);
      setIsPending(false);
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
          <Button block type="submit" className="mt-2">
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
