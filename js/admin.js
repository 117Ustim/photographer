
const openPopUp = document.querySelector('.open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click',function(e){
e.preventDefault();
popUp.classList.add('active');

});

closePopUp.addEventListener('click',() => {
    popUp.classList.remove('active');  
});

document.getElementById('check').onclick = function() {
let login = document.getElementById('login').value;
let password = document.getElementById('password').value;
if (login == 'admin' && password == '777'){
    window.location.href = "admin.html";
 }   else {
        alert('Вы ввели неправельный логин или пароль');
    }


};