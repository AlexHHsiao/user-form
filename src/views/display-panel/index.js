import React from 'react';
import styled from "@emotion/styled";
import Header from "../components/header";
import Row from "../components/row";
import Col from "../components/col";
import Tag from "../components/tag";
import Button from "../components/button";
import PropTypes from "prop-types";
import {dateHelper} from "../../utils/helper";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const StyledContainer = styled.div`
  padding: 40px;
`;

const UserDataContainer = styled.div`
  margin-top: 60px;
  overflow-x: auto;
`;

const UserDataContain = styled.div`
  min-width: 1000px;
`;

const RowContainer = styled.div`
  padding: 30px 0;
  ${({hasBorder}) => hasBorder && {borderTop: '1px solid black'}}
`;

const StyledButtonContainer = styled.div`
  float: right;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const DisplayPanel = ({userData, userDataHandler}) => {
    const tagTypeHandler = (status) => {
        if (status === 'active') {
            return 'success';
        } else if (status === 'inactive') {
            return 'error';
        } else {
            return 'default';
        }
    };

    return (
        <StyledContainer>
            <Header title='User List'/>

            <UserDataContainer>
                <UserDataContain>
                    {
                        userData.map((val, index) => {
                            const {id, firstName, lastName, email, status, created, updated} = val;

                            return (
                                <RowContainer key={id} hasBorder={index !== 0}>
                                    <Row alignCenter={true}>
                                        <Col sm={2}>{firstName} {lastName}</Col>
                                        <Col sm={3}><a href={`mailto:${email}`}>{email}</a></Col>
                                        <Col sm={1}><Tag text={status} type={tagTypeHandler(status)}/></Col>
                                        <Col sm={2}>Created: {dateHelper(created)}</Col>
                                        <Col sm={2}>Updated: {dateHelper(updated)}</Col>
                                        <Col sm={2}>
                                            <StyledButtonContainer>
                                                <Button disabled={status === 'disabled'}
                                                        onClick={() => userDataHandler(val, true)}><EditOutlined/></Button>
                                                <Button
                                                    onClick={() => userDataHandler(val, false)}><DeleteOutlined/></Button>
                                            </StyledButtonContainer>
                                        </Col>
                                    </Row>
                                </RowContainer>
                            )
                        })
                    }
                </UserDataContain>
            </UserDataContainer>

        </StyledContainer>
    );
};

DisplayPanel.propTypes = {
    userData: PropTypes.array,
    userDataHandler: PropTypes.func
};

DisplayPanel.defaultProps = {
    userData: [],
};

export default DisplayPanel;