import React, {useState} from 'react';
import Row from "../components/row";
import Col from "../components/col";
import FormPanel from "../form-panel";
import DisplayPanel from "../display-panel";
import Notification from "../components/notification";
import {defaultUserData} from "../../utils/constants";

const LandingPage = () => {
    const [userData, setUserData] = useState(defaultUserData);
    const [notiMessage, setNotiMessage] = useState('');
    const [updateData, setUpdateData] = useState(null);

    const userDataHandler = (data, isEdit) => {
        if (isEdit) {
            setUpdateData(data);
            setNotiMessage(`User ${data.firstName} ${data.lastName} ready for update!`);
        } else {
            const copy = [...userData];
            const index = copy.findIndex(({id}) => data.id === id);
            copy.splice(index, 1);
            setUserData(copy);
            setUpdateData(null);
            setNotiMessage(`User ${data.firstName} ${data.lastName} deleted!`);
        }
    };

    const formHandler = (data, isUpdate) => {
        if (isUpdate) {
            const copy = [...userData];
            const index = copy.findIndex(({id}) => data.id === id);
            copy.splice(index, 1, data);
            setUserData(copy);
            setNotiMessage(`User ${data.firstName} ${data.lastName} updated!`);
        } else {
            setUserData([...userData, data]);
            setNotiMessage(`User ${data.firstName} ${data.lastName} added!`);
        }
    };

    return (
        <>
            <Notification message={notiMessage}/>
            <Row>
                <Col sm={12} md={4}>
                    <FormPanel setUpdateData={setUpdateData} updateData={updateData} onSubmit={formHandler}/>
                </Col>
                <Col sm={12} md={8}>
                    <DisplayPanel userData={userData} userDataHandler={userDataHandler}/>
                </Col>
            </Row>
        </>
    );
};

export default LandingPage;