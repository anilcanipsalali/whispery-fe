export const validateLoginForm = ({mail, password}) => {
    return (
    validateMail(mail) &&
    validatePassword(password)
    );
};

export const validateRegisterForm = ({mail, password, username}) => {
    return (validateMail(mail) && 
    validatePassword(password) && 
    validateUsername(username)
    );
}

export const validatePassword = (password) => {
    return (password.length > 5 && password.length < 16);
};

export const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
};

export const validateUsername = (username) => {
    return (username.length > 2 && username.length < 20);
}