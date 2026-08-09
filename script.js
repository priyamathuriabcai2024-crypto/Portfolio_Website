const typing = document.getElementById("typing");

const words = [
    "AI Engineer",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");
            observer.unobserve(entry.target);

        }

    });

});

reveals.forEach((section) => {

    observer.observe(section);

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("showMenu");

});

const skillSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting){

        progressBars.forEach(function(bar){

            bar.style.width = bar.dataset.width;

        });

        skillObserver.unobserve(skillSection);

    }

},{
    threshold:0.4
});

skillObserver.observe(skillSection);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&  window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / documentHeight) * 100;

    progressBar.style.width = scrollPercent + "%";

});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    if(loader){
     setTimeout(() => {
        loader.classList.add("hide");
     }, 1000);
    }
});

