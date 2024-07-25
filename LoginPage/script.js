const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
//Show input error message

function showError(input,message)
{
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input)
{
    const formControl=input.parentElement;
    formControl.className ='form-control success';
}
function isValidEmail(input)
{
    var re = /\S+@\S+\.\S+/;
    if(re.test(input.value))
    {
        showSuccess(input);
    }
    else{
        showError(input,`Email is not valid`);
    }
}
//check password match
function checkPasswordMatch(input1,input2)
{
    if(input1.value!==input2.value)
    {
        showError(input2,'Passwords do not match');
    }
}

function checkrequired(input)
{
    input.forEach(function(input)
{
    if(input.value.trim()==='')
        showError(input,`${input.id} is required`);
    else
        showSuccess(input);
})
}
function checkLength(input,min,max)
{
    if(input.value.length<min)
    {
        showError(input,`${input.id} must be alteast ${min} charcters`);

    }
    else if(input.value.length>max)
    {
        showError(input,`${input} must be less than ${max} charcters`);
    }
    else
    {
        showSuccess(input);
    }
}

//Event Listners
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    
    checkrequired([username,email,password,password2]);
    isValidEmail(email);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkPasswordMatch(password,password2);

});
