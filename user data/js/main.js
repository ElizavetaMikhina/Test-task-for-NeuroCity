// Получение элементов контейнера и пагинации

const userContainer = document.getElementById('userContainer');
const paginationContainer = document.getElementById('pagination');
let currentPage = 1;

// Функция для получения данных пользователей

function fetchUsers(page) {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => response.json())
    .then(data => {
      if (data && data.data) {
        const users = data.data;
        users.sort((a, b) => a.first_name.localeCompare(b.first_name));

        userContainer.innerHTML = '';

        users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.classList.add('user-card');
          userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <div class="user-data">
              <h2>${user.first_name} ${user.last_name}</h2>
              <p>Email: ${user.email}</p>
            </div>
          `;
          userContainer.appendChild(userCard);
        });
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Функция для создания кнопок пагинации

function createPaginationButtons(totalPages) {
  paginationContainer.innerHTML = '';

  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement('button');
    button.textContent = page;
    button.classList.add('pagination-button');
    button.addEventListener('click', () => {
      currentPage = page;
      fetchUsers(currentPage);
      updateActiveButton();
    });
    paginationContainer.appendChild(button);
  }

  updateActiveButton();
}

// Функция для обновления активной кнопки пагинации

function updateActiveButton() {
  const buttons = paginationContainer.querySelectorAll('.pagination-button');
  buttons.forEach(button => {
    if (Number(button.textContent) === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Загрузка начальных данных и пагинации

fetchUsers(currentPage);
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => {
    const totalPages = data.total_pages;
    createPaginationButtons(totalPages);
  })
  .catch(error => console.error('Error fetching pagination data:', error));
