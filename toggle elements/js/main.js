const toggleButton = document.getElementById('toggleButton');
const elements = document.querySelectorAll('.element');

let isHidden = true;
let debounceTimeout;

function toggleElements() {
  clearTimeout(debounceTimeout);
  
  debounceTimeout = setTimeout(() => {
    elements.forEach(element => {
      if (isHidden) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });

    isHidden = !isHidden;
  }, 1000);
}

toggleButton.addEventListener('click', toggleElements);