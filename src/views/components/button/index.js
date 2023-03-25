import React from 'react';
import PropTypes from "prop-types";
import {StyledButton} from "./styles";

const Button = ({children, block, disabled, type, onClick}) => (
    <StyledButton onClick={onClick} type={type} block={block} disabled={disabled}>{children}</StyledButton>);

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
};


export default Button;