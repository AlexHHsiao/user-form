import {css, keyframes} from '@emotion/react'
import styled from "@emotion/styled";

const enter = keyframes`
  from {
    top: -50px
  }
  to {
    top: 20px
  }
`;

const dismiss = keyframes`
  from {
    top: 20px
  }
  to {
    top: -50px
  }
`;

export const StyledNotification = styled.div`
  font-size: 16px;
  display: table;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid;
  padding: 5px 15px;
  color: #52c41a;
  background: #f6ffed;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: -50px;
  ${({
       show,
       init
     }) => init && (show ? {animation: css`${enter} 0.7s linear forwards`} : {animation: css`${dismiss} 0.7s linear forwards`})};
`;