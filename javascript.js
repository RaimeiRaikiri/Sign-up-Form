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

// Telephone number confirmation

const number = document.querySelector('#number');
const numberOutput = document.querySelector('#number-out');

// Too short and long functions are necessary as they have not been given min and max lengths in the html
// Made scalable for other inputs confirmation

function IsTooShort(input, minLength)
{
    if (input.value.toString().length < minLength)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function IsTooLong(input, maxLength)
{
    if (input.value.toString().length > maxLength)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function IsNumeric(input)
{
    const RE = /[0-9]+/;
    let val = RE.test(input.value.toString());
    return val;
}

number.addEventListener('input', () => {
    // Used ! IsNumeric as it returns true when numeric but we need to find when it is not numeric
    if (!IsNumeric(number))
    {
        numberOutput.textContent = '* Input entered is not a number';
    }
    else if (IsTooShort(number, 11))
    {
        numberOutput.textContent = '* Number is too short, input should be 11 digits';
    }
    else if (IsTooLong(number, 11))
    {
        numberOutput.textContent = '* Number is too long, input should be 11 digits';
    }
    else
    {
        numberOutput.textContent = '';
    }
})