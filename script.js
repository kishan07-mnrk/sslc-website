let slideIndex = 0;

showSlides();

function showSlides(){

let slides = document.getElementsByClassName("slide");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex > slides.length){

slideIndex = 1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}


function darkMode(){

document.body.classList.toggle("dark");

}


function toggleMusic(){

let music = document.getElementById("bgMusic");

if(music.paused){

music.play();

}

else{

music.pause();

}

}

// First day of school
const firstDay = new Date("April 25, 2025");

// Today's date
const today = new Date();

// Calculate days since first day
const timeDifference = today - firstDay;
const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Display on website
document.getElementById("daysSince").textContent = daysSince;

setTimeout(function(){
document.getElementById("intro").style.display="none";
},4000);
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
radius:Math.random()*2,
speed:Math.random()*0.5
});
}

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(star=>{
ctx.beginPath();
ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);
ctx.fill();

star.y += star.speed;

if(star.y > canvas.height){
star.y = 0;
star.x = Math.random()*canvas.width;
}
});

requestAnimationFrame(drawStars);
}

drawStars();