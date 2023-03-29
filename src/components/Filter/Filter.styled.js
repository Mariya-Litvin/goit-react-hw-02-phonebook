import styled from 'styled-components';

export const WrapperFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FilterText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const InputFilter = styled.input`
  height: 20px;
  width: 350px;
  padding: 5px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  :focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  :hover {
    border-color: #007bff;
  }
`;
