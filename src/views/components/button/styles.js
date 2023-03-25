import styled from "@emotion/styled";
import {css} from "@emotion/react";

const StyledDisabled = css`
  border-color: #d9d9d9;
  background-color: rgba(0, 0, 0, .04);
  color: rgba(0, 0, 0, .25);
  cursor: not-allowed;
`;

const StyledState = css`
  :hover {
    background-color: #4096ff;
  }

  :active {
    background-color: #0958d9;
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  cursor: pointer;
  text-align: center;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  background-color: #1677ff;
  height: 32px;
  font-size: 14px;
  line-height: 22px;

  ${({block}) => block && {width: '100%'}}
  ${({disabled}) => disabled ? StyledDisabled : StyledState}
`;