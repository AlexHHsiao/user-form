import React from 'react';
import PropTypes from 'prop-types';
import {StyledCol} from "./styles";

const Col = ({children, sm, md}) => (<StyledCol sm={sm} md={md}>{children}</StyledCol>);

Col.propTypes = {
    children: PropTypes.node,
    sm: PropTypes.number,
    md: PropTypes.number
};

export default Col;