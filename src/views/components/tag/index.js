import React from 'react';
import PropTypes from "prop-types";
import {StyledTag} from "./styles";
import {CheckCircleOutlined, CloseCircleOutlined, StopOutlined} from "@ant-design/icons";

const iconHandler = (type) => {
    if (type === 'success') {
        return <CheckCircleOutlined/>;
    } else if (type === 'error') {
        return <CloseCircleOutlined/>;
    } else {
        return <StopOutlined/>;
    }
};

const Tag = ({type, text}) => (<StyledTag type={type}>{iconHandler(type)} {text}</StyledTag>);

Tag.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
};

export default Tag;