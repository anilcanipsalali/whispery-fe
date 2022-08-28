import React from 'react';
import InputWithLabel from '../../../components/InputWithLabel'

const RegisterPageInputs = (props) => {
    const { mail, setMail, username, setUsername, password, setPassword } = props;
    return (
        <>
        <InputWithLabel 
            value={mail}
            setValue={setMail}
            label='E-mail'
            type='text'
            placeholder='Enter e-mail address'
        />
        <InputWithLabel 
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder='Enter your username'
        />
        <InputWithLabel 
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter your password'
        />    
        </>
    );
};

export default RegisterPageInputs;