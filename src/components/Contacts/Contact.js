import React, { useState } from "react";
import { Table, Button, ButtonGroup, From } from "reactstrap";
import DelContact from "../DelContact/DelContact";
import AddContact from "../AddContact/AddContact";
import ModContact from "../ModContact/ModContact";
import Header from "../Header/Header";

const Contact = ({
  contact,
  id,
  setFormBotton,
  fetchContacts,
  handleUpdate,
}) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [contacId, setContactId] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  // let setHandle = false;

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

  return (
    <div className="container">
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />

      <AddContact
        isUpdate={isUpdate}
        nameup={name}
        phoneup={phone}
        setFormBotton={setFormBotton}
        fetchContacts={fetchContacts}
      />

      <Table className="mt-4" size="md" hover responsive striped>
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
                  <Button
                    onClick={() =>
                      ModContact(
                        results.id,
                        setIsUpdate,
                        setName,
                        setPhone,
                        fetchContacts
                      )
                    }
                  >
                    Modify
                  </Button>
                  <Button onClick={() => DelContact(results.id, fetchContacts)}>
                    Delete
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
