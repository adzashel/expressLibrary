const darkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
}


// get element toggle
const toggle = document.getElementById('toggle');

// add event listener

toggle.addEventListener('click', darkMode);

