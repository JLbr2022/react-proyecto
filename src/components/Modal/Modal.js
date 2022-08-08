function handleModal(contactId) {
  console.log("CALL Modal.js");
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button>X</button>
        <div className="modalTitle">
          <h1>Modal Title</h1>
        </div>
        <div className="modalBody">
          <h5>Modal Body</h5>
        </div>
        <div className="modalFooter">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default handleModal;
