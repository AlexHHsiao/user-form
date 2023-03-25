import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledHeader = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  font-size: 3rem;
`;

const Header = ({title}) => (<StyledHeader>{title}</StyledHeader>);

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;