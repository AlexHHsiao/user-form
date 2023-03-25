import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${({alignCenter}) => alignCenter && {alignItems: 'center'}}
`;

const Row = ({children, alignCenter}) => (<StyledRow alignCenter={alignCenter}>{children}</StyledRow>);

Row.propTypes = {
    children: PropTypes.node,
    alignCenter: PropTypes.bool,
};

export default Row;