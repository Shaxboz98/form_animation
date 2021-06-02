var login=document.getElementById('login');
var singup=document.getElementById('signup');
var show_login=document.getElementById('show_login');
var show_signup=document.getElementById('show_signup');
show_signup.addEventListener('click', function(){
    login.classList.remove('active');
    singup.classList.add('active');
})
show_login.addEventListener('click', function(){
    singup.classList.remove('active');
    login.classList.add('active');
})