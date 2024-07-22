// Variables
let mybutton = document.getElementById("topBTN");
const container = document.getElementById("falling_container");
const createdNumbers = new Set();

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to the top of the page when the button is clicked
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function createFallingNumber() {
    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = Math.random() < 0.5 ? '0' : '1';
    number.style.left = `${Math.random() * 98}vw`;
    number.style.animationDuration = `${Math.random() * 5 + 2}s`;
    container.appendChild(number);

    // Remove the number after it falls out of view
    number.addEventListener('animationend', () => {
        number.remove();
    });
}

var typing = new Typed(".typing_text", {
    strings: ["Software Development!", "Game Development!", "Web Development!"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 500,
});

window.onscroll = function() {
    scrollFunction();
};

setInterval(createFallingNumber, 150);