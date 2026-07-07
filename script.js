const text="365 days, countless memories, endless love, and forever to go... ❤️";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,55);

}

}

typing();

const startDate=new Date("July 7, 2025 00:00:00");

function updateCountdown(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60)%24);

const minutes=Math.floor(diff/(1000*60)%60);

const seconds=Math.floor(diff/1000%60);

document.getElementById("countdown").innerHTML=
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCountdown,1000);

updateCountdown();

function openLetter(){

document.getElementById("letter").classList.toggle("hidden");

}
