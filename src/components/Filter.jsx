export const Filter = ({ onFindName, valueFilter }) => {
  return (
    <>
      <p>Find Contacts by name</p>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={onFindName}
          value={valueFilter}
        />
      </label>
    </>
  );
};
