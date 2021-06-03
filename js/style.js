document.getElementById('btn-submit').addEventListener('click', validateEmail);

function validateEmail(e){
    const email = document.getElementById('email');
    const invalid = document.querySelector('.invalid-feedback');
    const btn = document.querySelector('#btn-submit');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(email.value === '' || !re.test(email.value)){
        invalid.style.display = 'block';
        email.style.borderColor = 'hsl(0, 93%, 68%)';
        btn.classList.add('btn-error');
    }else{
        invalid.style.display ='none';
        email.style.borderColor = 'hsl(0, 36%, 70%)';
        btn.classList.remove('btn-error');
    }
    e.preventDefault();
}