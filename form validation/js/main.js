const registrationForm = document.getElementById('registrationForm');
const errorMessage = document.getElementById('errorMessage');

// Добавляем обработчик события "submit" для формы регистрации

registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Получаем элементы полей ввода

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  // Получаем значения из полей ввода

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Регулярные выражения для валидации

  const nameRegex = /^[a-zA-Zа-яА-Я\s-]{3,30}$/;
  const phoneRegex = /^\+?\d{10,15}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;

  // Сбрасываем сообщение об ошибке

  errorMessage.textContent = '';
  
  // Валидация имени

  if (!nameRegex.test(name)) {
    errorMessage.textContent = 'Некорректное имя';
    nameInput.classList.add('error');
    nameInput.value = '';
    return;
  } else {
    nameInput.classList.remove('error');
  }

  // Валидация телефона

  if (!phoneRegex.test(phone)) {
    errorMessage.textContent = 'Некорректный телефон';
    phoneInput.classList.add('error');
    phoneInput.value = '';
    return;
  } else {
    phoneInput.classList.remove('error');
  }

  // Валидация пароля

  if (!passwordRegex.test(password)) {
    errorMessage.textContent = 'Некорректный пароль';
    passwordInput.classList.add('error');
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    return;
  } else {
    passwordInput.classList.remove('error');
  }

  // Проверка совпадения паролей

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Пароли не совпадают';
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    return;
  } else {
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
  }

  // Если ошибок нет, выводим сообщение об успешной отправке формы

  errorMessage.textContent = 'Форма успешно отправлена!';

  // Очистка полей формы после успешной отправки
  
  nameInput.value = '';
  phoneInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
});
