import PropTypes from 'prop-types';
import { FilterText, InputFilter, WrapperFilter } from './Filter.styled';
export const Filter = ({ onFindName, valueFilter }) => {
  return (
    <WrapperFilter>
      <FilterText>Find Contacts by name</FilterText>
      <label>
        <InputFilter
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={onFindName}
          value={valueFilter}
        />
      </label>
    </WrapperFilter>
  );
};

Filter.propTypes = {
  onFindName: PropTypes.func.isRequired,
  valueFilter: PropTypes.string.isRequired,
};
