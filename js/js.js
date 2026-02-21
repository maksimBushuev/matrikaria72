// img model
w3.includeHTML();
let model_img = document.getElementById('model_img');
let asa = document.getElementById('asa');
let model_zakaz = document.getElementById('model_zakaz');

function model_im(userName) {
    // Теперь userName содержит текст из той карточки, по которой кликнули
    alert("Вы выбрали пользователя: " + userName);
    // console.log("Данные для обработки:", userName);
    // Здесь ты можешь, например, записать это имя в localStorage
    // localStorage.setItem('selectedUser', userName);
    model_img.style.display='block';
    document.getElementById('asa').src = `${userName}`;
}
// asa.addEventListener('click' = () =>{
//     model_img.style.display='none';
//     // document.getElementById('asa').src = ``;
// })
function modelZakaz (img,opis,price,numer) {
    model_zakaz.style.display = 'block';
    document.getElementById('modalZakaz').src = `${img}`;
    document.getElementById('zakaz_numer').innerHTML = `${numer}`;
    document.getElementById('zakaz_price').innerHTML = `ИТОГО : <span class='w3-xlarge'>${price}</span> р.`;

}

