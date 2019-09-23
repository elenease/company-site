// Валидация формы связи с компанией

// Форма
var submitForm = document.getElementById('contactForm');
// Поле Имя
var user_name = document.getElementById('contact-name');
// Поле e-mail
var user_email = document.getElementById('contact-email');
// Поле тема
var subject = document.getElementById('contact-subject');
// Поле Сообщение
var message = document.getElementById('contact-message');
// Кнопка Отправить
// var submit_btn = document.getElementById('contact-submit');

// Валидация

// Валидация обязательного поля 
function validateField(u_data, params) {
  
  var validity = false;

  if (u_data && u_data.length >= params.min_length && u_data.length <= params.max_length) {
    validity = true;
  }

  return validity;
};

// Обработка нажатия на кнопку "Отправить"
function validateForm(evt) {
  evt.preventDefault();

  var elems = Array.from(submitForm.elements);
  
  var name_rule = {
    min_length: 2,
    max_length: 140
  };

  var email_rule = {
    min_length: 6,
    max_length: 140
  };

  // Объект с данными полей
  var user_data = {
  	name: user_name.value.trim(),
  	email: user_email.value.trim(),
  	subject: subject.value.trim(),
  	message: message.value.trim()
  };

  // Чекбокс отмечен?
  var aggree = elems[4].checked;

   // Проверяем поля на правильность
   var name_validity = validateField(user_data.name, name_rule);
   var email_validity = validateField(user_data.email, email_rule);

  if (name_validity && email_validity) {
    if (aggree) {
      alert('Отправлено');
      submitForm.submit();
    } else {
      alert('Подтвердите, пожалуйста, согласие на обработку персональных данных');
    }
  }
  
  // if (aggree) {

  // 	console.log(user_data);

    // console.log(name_validity, email_validity);

    // if (name_validity && email_validity) {
    //   // Отправляем форму:
    //   alert('Отправлено');
    //   submitForm.submit();
    // }

  //   alert('Отправлено');
  //   submitForm.submit();

  // } else {

  //   alert('Подтвердите, пожалуйста, согласие на обработку персональных данных');
   
  // }

};

// Обработчик нажатия на кнопку отправить
// document.getElementById('contact-submit').addEventListener('click', validateForm);

// Слушаем событие submit на форме
// submitForm.addEventListener('submit', function(submitEvt) {
  // submitEvt.preventDefault();
  // var formData = new FormData(submitForm);
  // console.log(submitEvt.type, formData);
// });
