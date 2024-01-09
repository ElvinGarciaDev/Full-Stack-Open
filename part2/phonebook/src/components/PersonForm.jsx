const PersonsForm = ({
  submitName,
  newName,
  handleInput,
  phoneNumber,
  handleNewNumber,
}) => {
  return (
    <>
      <form onSubmit={submitName}>
        <div>
          name: <input required value={newName} onChange={handleInput} />
          number:{" "}
          <input required value={phoneNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonsForm;
