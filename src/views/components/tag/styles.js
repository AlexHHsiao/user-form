import {css} from "@emotion/react";
import styled from "@emotion/styled";

const SuccessTag = css`
  color: #52c41a;
  background: #f6ffed;
`;

const ErrorTag = css`
  color: #ff4d4f;
  background: #fff2f0;
  border-color: #ffccc7;
`;

const DefaultTag = css`
  background: rgba(0, 0, 0, .02);
  border: 1px solid #d9d9d9;
`;

export const StyledTag = styled.div`
  font-size: 12px;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid;
  padding: 0 5px;

  ${({type}) => {
    if (type === 'success') {
        return SuccessTag;
    } else if (type === 'error') {
        return ErrorTag;
    } else {
        return DefaultTag;
    }
}}
`;