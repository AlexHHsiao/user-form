import React, {useState, useEffect} from 'react';
import Header from "../components/header";
import Input from "../components/input";
import Dropdown from "../components/dropdown";
import Button from "../components/button";
import styled from "@emotion/styled";
import {dropdownOptions} from "../../utils/constants";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  padding: 40px;
  background-color: lightgray;
  box-sizing: border-box;

  @media screen and (min-width: 40em) {
    height: 100vh;
    border-right: 1px solid black;
  }
`;

const StyledForm = styled.form`
  padding: 20px 0;
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
`;

const FormPanel = ({updateData, setUpdateData, onSubmit}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('active');

    useEffect(() => {
        if (updateData) {
            const {firstName, lastName, email, status} = updateData;

            setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
            setStatus(status);
        } else {
            resetHandler();
        }
    }, [updateData]);

    const formHandler = (e) => {
        e.preventDefault();

        let data = {
            firstName,
            lastName,
            email,
            status,
        };

        if (updateData) {
            const {id, created} = updateData;
            data = {
                id,
                created,
                updated: new Date().toString(),
                ...data,
            }
        } else {
            data = {
                id: Math.floor(Math.random() * 100).toString(),
                created: new Date().toString(),
                updated: '',
                ...data
            }
        }

        onSubmit(data, updateData ? true : false);
        resetHandler();
    };

    const resetHandler = () => {
        if (updateData) {
            setUpdateData(null);
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setStatus('active');
    };

    const changeHandler = ({target: {value, name}}) => {
        switch (name) {
            case 'firstName':
                setFirstName(value.trim());
                break;
            case 'lastName':
                setLastName(value.trim());
                break;
            case 'email':
                setEmail(value.trim());
                break;
            case 'status':
                setStatus(value);
                break;
            default:
                break;
        }
    };

    return (
        <StyledContainer>
            <Header title={updateData ? 'Update User' : 'Add User'}/>

            <StyledForm onSubmit={formHandler} onChange={(e) => changeHandler(e)} onReset={resetHandler}>
                <Input labelText='First Name' type='text' name='firstName' required={true} value={firstName}
                       pattern="[A-Za-z0-9]{1,20}"/>
                <Input labelText='Last Name' type='text' name='lastName' value={lastName} pattern="[A-Za-z0-9]{1,20}"/>
                <Input labelText='Email' type='email' name='email' required={true} value={email}
                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                <Dropdown labelText='Status' options={dropdownOptions} value={status} name='status'/>
                <StyledButtonContainer>
                    <Button block={true} type='submit'>{updateData ? 'Update' : 'Add'}</Button>
                </StyledButtonContainer>
                <StyledButtonContainer>
                    <Button block={true} type='reset'>{updateData ? 'Clear Update' : 'Reset'}</Button>
                </StyledButtonContainer>
            </StyledForm>
        </StyledContainer>
    );
};

FormPanel.propTypes = {
    updateData: PropTypes.object,
    setUpdateData: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default FormPanel;