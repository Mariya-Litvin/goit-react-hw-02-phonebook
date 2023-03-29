import styled from 'styled-components';

export const ListContactText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonDelete = styled.button`
  width: 60px;
  height: 30px;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  border-color: #007bff;
  background-color: #abcdef;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #e28090;
  }
`;
