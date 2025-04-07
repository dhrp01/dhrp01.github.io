function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const roles=['Software Developer', 'Full Stack Engineer', 'GenAI Developer', 'AI Engineer', 'Machine Learning Engineer', 'Linux Enthusiast']
let currentIndex = 0;
const role_text = document.getElementById('role')
let currentRoleIndex = 0;
let typingDirection = 1;

function changeRole() {
    // DIRECT CHANGE
    // document.getElementById('role').innerText = roles[currentIndex];
    // currentIndex = (currentIndex + 1) % roles.length

    // PHASE IN AND PHASE OUT
    // const role_text = document.getElementById('role');
    // role_text.style.opacity = 0;
    // setTimeout(() => {
    // role_text.innerText = `I am ${roles[currentIndex]}`;
    // role_text.style.opacity = 1;
    // currentIndex = (currentIndex + 1) % roles.length
    // }, 1000
    // )

    // DELETING AND TYPING
    const role = roles[currentIndex];
    const shortenedRole = role.substring(0, currentRoleIndex);
    role_text.innerText = shortenedRole;
    role_text.style.height = `${role_text.scrollHeight}px`

    if (typingDirection === 1){
        currentRoleIndex++;
        if (currentRoleIndex > role.length) {
            typingDirection = -1;
            currentRoleIndex = role.length;
            setTimeout(() => {
                // Start Deleting after some delay
                typingDirection = -1;
            }, 500
            )
        }
    } else {
        currentRoleIndex--;
        if (currentRoleIndex === 0) {
            typingDirection = 1;
            currentIndex = (currentIndex + 1) % roles.length
        }
    }
}

setInterval(changeRole, 80)

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);

    // Update theme icon
    const themeIcons = document.querySelectorAll('.theme-icon');
    themeIcons.forEach(icon => {
        icon.src = newTheme === 'dark' ? './assets/sun.png' : './assets/moon.png';
        icon.alt = newTheme === 'dark' ? 'Light mode' : 'Dark mode';
    });

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // Set initial theme icon
    const themeIcons = document.querySelectorAll('.theme-icon');
    themeIcons.forEach(icon => {
        icon.src = savedTheme === 'dark' ? './assets/sun.png' : './assets/moon.png';
        icon.alt = savedTheme === 'dark' ? 'Light mode' : 'Dark mode';
    });
});
