// Dark Mode
let btn = document.getElementById("dark-btn");
btn.onclick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.innerHTML = "Light ☀️";
    } else {
        btn.innerHTML = "Dark 🌙";
    }
}

// Skills
let skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];
let skillsContainer = document.querySelector(".skills-cards");
skillsContainer.innerHTML = "";
for(let i = 0; i < skills.length; i++){
    skillsContainer.innerHTML += `<div class="card">${skills[i]}</div>`;
}

// Contact Form
let sendBtn = document.getElementById("send-btn");
sendBtn.onclick = function(){
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-input").value;

    if(name == "" || email == "" || message == ""){
        alert("Please fill every field properly!");
    } else {
        alert("Message sent successfully! Thank You " + name + "!");
    }
}

// Hamburger Menu
let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("nav-links");
hamburger.onclick = function(){
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
}
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navLinks.contains(e.target)){
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    }
});