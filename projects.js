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