import styled from "@emotion/styled";

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  padding: 3px 0 8px;
`;

export const StyledInput = styled.input`
  position: relative;
  height: 32px;
  box-sizing: border-box;
  padding: 5px 10px;
  display: inline-block;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;

  :hover {
    border-color: #4096ff;
  }

  :focus {
    border-color: #4096ff;
  }
`;