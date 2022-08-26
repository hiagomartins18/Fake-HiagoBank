const hamburger = document.querySelector(".sandwitch");
const navMenu = document.querySelector(".navbar-ul");
const MainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector (".thank-you")
const submitButton = document.querySelector (".submit-btn")
const rateAgain = document.getElementById ("rate-again")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener ("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))








document.querySelector('.card-number').oninput = () =>{

    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number').value;
}

document.querySelector('.card-name-holder').oninput = () =>{

    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-name-holder').value;
}

document.querySelector('.month-expiration').oninput = () =>{

    document.querySelector('.exp-month').innerText = document.querySelector('.month-expiration').value;
}

document.querySelector('.year-expiration').oninput = () =>{

    document.querySelector('.exp-years').innerText = document.querySelector('.year-expiration').value;
}

document.querySelector('.cvv-number').onmouseenter = () =>{

    document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(0)';
}

document.querySelector('.cvv-number').onmouseleave = () =>{

    document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(-180deg)';
}

document.querySelector('.cvv-number').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-number').value;
}


submitButton.addEventListener("click", () => {

    thanksContainer.classList.remove("hidden")
    MainContainer.style.display = "none"
})



