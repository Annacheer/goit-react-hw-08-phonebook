import styled from '@emotion/styled';

// export const ButtonStyle = styled.button`
//   margin-left: 10px;
//   background-color: transparent;
//   border: 1px solid gray;
//   border-radius: 7px;
//   cursor: pointer;
//   b &:active {
//     background-color: blue;
//     color: white;
//   }
// `;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  background-color: #f8f9fa;
  &:hover {
    background-color: #e9ecef;
  }
`;
