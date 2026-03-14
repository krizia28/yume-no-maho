let citations = [
"Plus la nuit est noire, plus les étoiles brillent.",
"Le cœur d’un homme peut être plus dangereux qu’un démon.",
"Les rêves sont la première forme de magie."
];

let random = Math.floor(Math.random() * citations.length);

document.getElementById("citation").innerText = citations[random];


function toggleContact() {

const contact = document.getElementById("contact-info");

if(contact.classList.contains("contact-visible")){

contact.classList.remove("contact-visible");

}else{

contact.classList.add("contact-visible");

}

}
