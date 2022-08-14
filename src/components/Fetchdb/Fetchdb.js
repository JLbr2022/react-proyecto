// import React, { useEffect, useState } from "react";

function Fetchdb() {
  const url = "http://localhost:4000/contacts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => setContacts(data));
}

Fetchdb();

export default Fetchdb;
