import React from 'react';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
    return 'Username should contains between 3 and 20 characters and password should contains between 6 and 15 characters. Also correct e-mail address should be provided!';
}

const getFormValidMessage = () => {
    return 'Press to register!';
}

const RegisterPageFooter = ({ handleRegister, isFormValid}) => {
    const navigate = useNavigate();

    const handlePushToLoginPage = () => {
        navigate('/login');
    };

    return (
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
            <div>
                <CustomPrimaryButton
                    label="Sign Up"
                    additionalStyles={{ marginTop: '30px'}}
                    disabled={!isFormValid}
                    onClick={handleRegister}
                />
            </div>
            </Tooltip>
            <RedirectInfo 
                text=''
                redirectText='Already have an account?'
                additionalStyles={{marginTop: '10px'}}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    );
};

export default RegisterPageFooter;