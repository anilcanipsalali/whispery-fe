import React from 'react';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
    return 'Enter correct e-mail address and password should contains between 6 and 15 characters!';
}

const getFormValidMessage = () => {
    return 'Press to sign in!';
}

const LoginPageFooter = ({ handleLogin, isFormValid}) => {
    const navigate = useNavigate();

    const handlePushToRegisterPage = () => {
        navigate('/register');
    };

    return (
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
            <div>
                <CustomPrimaryButton
                    label="Sign In"
                    additionalStyles={{ marginTop: '30px'}}
                    disabled={!isFormValid}
                    onClick={handleLogin}
                />
            </div>
            </Tooltip>
            <RedirectInfo 
                text='Need an account? '
                redirectText='Register'
                additionalStyles={{marginTop: '10px'}}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
};

export default LoginPageFooter;