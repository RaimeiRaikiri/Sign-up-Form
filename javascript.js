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
    }
    else
    {
        passwordMatch = false;
        passwordOutput.textContent = '* Passwords do not match';
    }
});
confPassword.addEventListener('input', () => {
    if (CheckPasswordsMatch(password, confPassword))
        {
            passwordMatch = true;
            passwordOutput.textContent = '';
        }
        else
        {
            passwordMatch = false;
            passwordOutput.textContent = '* Passwords do not match';
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
