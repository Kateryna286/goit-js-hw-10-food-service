const switchToggle = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

switchToggle.addEventListener('change', switchThemes);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const myTheme = localStorage.getItem('my-theme');
body.classList.add(`${myTheme}`);

if (myTheme === "dark-theme") {
    switchToggle.checked = true;
};


function switchThemes(event) {

    if (switchToggle.checked) {
        body.classList.remove("light-theme", "dark-theme");
        localStorage.setItem('my-theme', Theme.DARK);
        body.classList.add(`${localStorage.getItem('my-theme')}`);
    }
    else {
        body.classList.remove("light-theme", "dark-theme");
        localStorage.setItem('my-theme', Theme.LIGHT);
        body.classList.toggle(`${localStorage.getItem('my-theme')}`);
    };
};