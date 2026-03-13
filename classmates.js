const searchBar = document.getElementById("searchBar");
const names = document.querySelectorAll("#nameList li");

searchBar.addEventListener("keyup", function() {

let value = searchBar.value.toLowerCase();

names.forEach(function(name){

if(name.textContent.toLowerCase().includes(value)){
name.style.display = "block";
}else{
name.style.display = "none";
}

});

});

const names = document.querySelectorAll(".name-list li");

names.forEach((name, index) => {
name.style.animationDelay = index * 0.1 + "s";
});