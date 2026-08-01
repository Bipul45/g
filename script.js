// ==========================
// Typing Effect
// ==========================

const message = `Happy Friendship Day Bharti! 🫂

✨ I can try and write as many cute paragraphs for you as possible, but I will never be able to express that I have for you.🧡🧡🧡✨ Your thoughts are like the waves that come one after another and erase all the bad memories like carvings on the seashore. Thank you for being my friend!😚❣️😌😚😘✨ Life without you would be the worst adventure of all. I'm glad that I don't have to live a single day without your loving company!🥺💫✨⭐✨✨ You are my most important friend, and I feel fortunate to share this bond with you, dear.✨🌈⚡✨ Whenever I need any mental or emotional support in life, you were always there for me, like a true friend. I'm so lucky that I have you!⚡🌈⭐✨🌟🥳🌈💖✨ Thank you from the depths of my heart for being my friend. I would choose you over material wealth a million times over. Indeed, you are a precious gift from God❣️😚✨💫🌟🥝😜✨ Happy friendship day bharti🧚‍♂️😜🤪Thanks for everything ❤️...Thanks for your support 😚Thanks for built-in best friend...😌😚✨✨🌟🌟

Happy Friendship Day ❤️
I Love You sooooooooo sooooooo Much Bharti ❤️ 🫂`;

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

window.onload = typeWriter;


// ==========================
// Music Play Button
// ==========================

musicBtn.onclick=()=>{

if(playing){

music.pause();

musicBtn.innerHTML="▶ Play Music";

musicBtn.classList.remove("music-playing");

playing=false;

}else{

music.play();

musicBtn.innerHTML="⏸ Pause Music";

musicBtn.classList.add("music-playing");

playing=true;

}

};


// ==========================
// Scroll Reveal Animation
// ==========================

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const revealTop=reveals[i].getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",revealSection);

revealSection();


// ==========================
// Auto Pause Music
// ==========================

song.addEventListener("ended",()=>{

playBtn.innerHTML="▶ Play Song";

});


// ==========================
// Smooth Scroll
// ==========================

document.documentElement.style.scrollBehavior="smooth";


// ==========================
// Floating Hearts
// ==========================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.opacity="0.8";
heart.style.pointerEvents="none";
heart.style.zIndex="999";

document.body.appendChild(heart);

let pos=100;

const move=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";
heart.style.transform=`rotate(${pos*3}deg)`;

if(pos<-10){

clearInterval(move);

heart.remove();

}

},40);

}

setInterval(createHeart,2500);
