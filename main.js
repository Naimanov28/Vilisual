
const form = document.getElementById('form');
const TOKEN = '7033839247:AAHKyA4VIZNsTOJaJzdKLAnsuVsbAoVjX6o';
const CHAT_ID = '-1002014212060';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


form.addEventListener('submit', (event) => {
    event.preventDefault();

    
if(form.name.value === '' || form.email.value === '' || form.message.value === '' || form.number.value === '') {
    alert('Заполните все поля ввода');
}else {
    alert('Ваша заявка успешно отправлена');

    let message1 = `<b>Заявка с сайта</b>\n`
    message1 += `<b>name: </b> ${form.name.value}\n`
    message1 += `<b>email: </b> ${form.email.value}\n`
    message1 += `<b>Phone number: </b> ${form.number.value}\n`
    message1 += `<b>message: </b> ${form.message.value}\n`

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message1
    }).then(response => {
        console.log('Сообщение успешно отправлено в Telegram:', response.data);
        // Дополнительные действия при успешной отправке
    })
    .catch(error => {
        console.error('Ошибка при отправке сообщения в Telegram:', error);
        // Дополнительные действия при ошибке
    });
    }
});

const formfooter = document.querySelector('.footer-form');

formfooter.addEventListener('submit', function (e) {
  e.preventDefault();

    
if(formfooter.number.value === '') {
    alert('Заполните все поля ввода');
}else {
    alert('Ваша заявка успешно отправлена');

    let message1 = `<b>Заявка с сайта</b>\n`
    message1 += `<b>номер телефона: </b> ${formfooter.number.value}\n`
    // console.log(formfooter.number.value);
    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message1
    }).then(response => {
        console.log('Сообщение успешно отправлено в Telegram:', response.data);
        // Дополнительные действия при успешной отправке
    })
    .catch(error => {
        console.error('Ошибка при отправке сообщения в Telegram:', error);
        // Дополнительные действия при ошибке
    });
    }
})



////// show modal 


const openModalButtons = document.querySelectorAll('.services-block_btn');
const krest = document.querySelector('.modal-krest');
const modal = document.getElementById('modal');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

openModalButtons.forEach(button => {
button.addEventListener('click', function() {
modal.style.display = 'block';

overlay.style.display = 'block';
});
});

krest.addEventListener('click', function () {
modal.style.display = 'none';
overlay.style.display = 'none';
})

overlay.addEventListener('click', function() {
modal.style.display = 'none';
overlay.style.display = 'none';
});


const showForm = document.querySelector('.show-form');

showForm.addEventListener('submit', function (e) {
e.preventDefault();


if(showForm.tel.value === '' || showForm.name.value === '' || showForm.text.value === '') {
alert('Заполните все поля ввода');
}else {
alert('Ваша заявка успешно отправлена');

let message1 = `<b>Заявка с сайта</b>\n`
message1 += `<b>name: </b> ${showForm.name.value}\n`
message1 += `<b>номер телефона: </b> ${showForm.tel.value}\n`
message1 += `<b>text: </b> ${showForm.text.value}\n`
// console.log(formfooter.number.value);
axios.post(URI_API, {
chat_id: CHAT_ID,
parse_mode: 'html',
text: message1
}).then(response => {
console.log('Сообщение успешно отправлено в Telegram:', response.data);
// Дополнительные действия при успешной отправке
})
.catch(error => {
console.error('Ошибка при отправке сообщения в Telegram:', error);
// Дополнительные действия при ошибке
});
}
})

