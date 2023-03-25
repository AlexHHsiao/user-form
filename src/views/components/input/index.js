import React from 'react';
import PropTypes from "prop-types";
import Row from "../row";
import Col from "../col";
import {StyledInput, StyledLabel} from "./styles";

const Input = ({type, labelText, onChange, pattern, required, value, name}) => {
    return (
        <Row>
            <Col sm={12}><StyledLabel>{labelText}</StyledLabel></Col>
            <Col sm={12}><StyledInput type={type} onChange={onChange} value={value} required={required}
                                      name={name} pattern={pattern}/></Col>
        </Row>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.string,
};

export default Input;