// Password confirmation for custom validation text 

const confPassword = document.querySelector('#confirm-pass');
const password = document.querySelector('#pass');

const passwordOutput = document.querySelector('#pass-out');
let passwordMatch = false;

function CheckPasswordsMatch(password, confPassword)
{
    if (password.value === confPassword.value)
    {
        return true;
    }
    else {
        return false;
    };
};

// Do the match check when an input is put into either field
password.addEventListener('input', () => {
    if (CheckPasswordsMatch(password, confPassword))
    {
        passwordMatch = true;
        passwordOutput.textContent = '';
        password.removeAttribute('id');
        confPassword.removeAttribute('id');
    }
    else
    {
        passwordMatch = false;
        passwordOutput.textContent = '* Passwords do not match';
        password.setAttribute('id', 'invalidpass');
        confPassword.setAttribute('id', 'invalidpass');
    }
});
confPassword.addEventListener('input', () => {
    if (CheckPasswordsMatch(password, confPassword))
        {
            passwordMatch = true;
            passwordOutput.textContent = '';
            password.removeAttribute('id');
            confPassword.removeAttribute('id');
        }
        else
        {
            passwordMatch = false;
            passwordOutput.textContent = '* Passwords do not match';
            password.setAttribute('id', 'invalidpass');
            confPassword.setAttribute('id', 'invalidpass');
        }
});

// Stop submission if passwords don't match

const form = document.querySelector('#signup');

form.addEventListener('submit', (event) => {
    if (!passwordMatch)
    {
        event.preventDefault();
    }
})
