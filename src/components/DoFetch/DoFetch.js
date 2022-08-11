import React, { useState, useEffect } from "react";

function DoFetch(url) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchContacts();
  }, []);
}
export default DoFetch;
