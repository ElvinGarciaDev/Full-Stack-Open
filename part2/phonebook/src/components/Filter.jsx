const Filter = ({ searchName, handleSearchName }) => {
  return (
    <>
      <div>
        <label>Search for name:</label>
        <input type="text" value={searchName} onChange={handleSearchName} />
      </div>
    </>
  );
};

export default Filter;
