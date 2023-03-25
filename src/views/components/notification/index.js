import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {CheckCircleOutlined} from "@ant-design/icons";
import {StyledNotification} from "./styles";

const Notification = ({message}) => {
    const [show, setShow] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (message.length > 0) {
            if (!init) {
                setInit(true);
            }
            setShow(true);

            const timeout = setTimeout(() => {
                setShow(false);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [message]);

    return (
        <StyledNotification show={show} init={init}>
            <CheckCircleOutlined style={{marginRight: '5px'}}/>{message}
        </StyledNotification>
    );
};

Notification.propTypes = {
    message: PropTypes.string
};

Notification.defaultProps = {
    message: '',
};

export default Notification;