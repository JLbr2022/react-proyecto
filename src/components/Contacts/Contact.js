import React, { useState } from "react";
import { Table, Button, ButtonGroup, From } from "reactstrap";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import DelContact from "../DelContact/DelContact";
import AddContact from "../AddContact/AddContact";
import ModContact from "../ModContact/ModContact";
import Header from "../Header/Header";
import "./Contact.css";

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

  // ============ SEARCH FUNCTION: filter list  ===========
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  let results = !searchTerm
    ? contact
    : contact.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div>
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />

      <AddContact
        isUpdate={isUpdate}
        nameup={name}
        phoneup={phone}
        setFormBotton={setFormBotton}
        fetchContacts={fetchContacts}
      />

      <Table className="mt-4" size="md" hover responsive striped>
        <thead className="tableHead">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th className="thActions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((results, index) => (
            <tr key={index}>
              <td>{results.id}</td>
              <td>{results.name}</td>
              <td>{results.phone}</td>
              <td>
                <ButtonGroup className="centerColumn">
                  <Button
                    color="warning"
                    title="Edit User"
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
                    <FaUserEdit />
                  </Button>
                  <Button
                    title="Delete User"
                    color="danger"
                    onClick={() => DelContact(results.id, fetchContacts)}
                  >
                    <FaTrashAlt className="me-2" />
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
