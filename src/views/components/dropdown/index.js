import React from 'react';
import PropTypes from "prop-types";
import Row from "../row";
import Col from "../col";
import {StyledSelect, StyledLabel} from "./styles";

const Dropdown = ({labelText, onChange, options, value, name}) => {
    return (
        <Row>
            <Col sm={12}><StyledLabel>{labelText}</StyledLabel></Col>
            <Col sm={12}>
                <StyledSelect onChange={onChange} value={value} name={name}>
                    {options.map(({label, key}) => <option key={key} value={key}>{label}</option>)}
                </StyledSelect>
            </Col>
        </Row>
    );
};

Dropdown.propTypes = {
    labelText: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
};

export default Dropdown;