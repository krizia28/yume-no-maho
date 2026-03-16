document.addEventListener("DOMContentLoaded", function(){

const citations = [
"Plus la nuit est noire, plus les étoiles brillent.",
"Le cœur d’un homme peut être plus dangereux qu’un démon.",
"Les rêves sont la première forme de magie."
];

const random = Math.floor(Math.random() * citations.length);
document.getElementById("citation").innerText = citations[random];

const reveal = document.querySelector(".reveal-text");

window.addEventListener("scroll", function(){

if(!reveal) return;

const position = reveal.getBoundingClientRect().top;
const screenPosition = window.innerHeight * 0.8;

if(position < screenPosition){
reveal.classList.add("visible");
}

});

});

function toggleContact(){
const contact = document.getElementById("contact-info");
contact.classList.toggle("contact-visible");
}
const enterButton = document.querySelector(".enter-world");

if(enterButton){

enterButton.addEventListener("click", function(e){

e.preventDefault();

const portal = document.getElementById("portal");

portal.classList.add("active");

setTimeout(function(){

window.location.href = "univers.html";

},800);

});

}
}
