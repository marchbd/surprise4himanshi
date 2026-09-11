/*=========================================================
    HAPPY BIRTHDAY WEBSITE
    SCRIPT.JS - PART 1
    DOM + INTRO + INITIALIZATION
=========================================================*/

let fireworksInterval;
let sparkleInterval;
let heartsInterval;

/*=========================
    DOM ELEMENTS
=========================*/

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const website = document.getElementById("website");

const bgMusic = document.getElementById("bgMusic");

const stars = document.getElementById("stars");
const clouds = document.getElementById("clouds");
const floatingHearts = document.getElementById("floatingHearts");
const shootingStars = document.getElementById("shootingStars");
const cursorGlow = document.getElementById("cursorGlow");

const typingText = document.getElementById("typingText");
const birthdayTitle = document.getElementById("birthdayTitle");

const memories = document.querySelectorAll(".memory");

const dayBox = document.getElementById("days");
const hourBox = document.getElementById("hours");
const minuteBox = document.getElementById("minutes");
const secondBox = document.getElementById("seconds");

const envelope = document.getElementById("envelope");

const letterOverlay = document.getElementById("letterOverlay");

const letterPage = document.getElementById("letterPage");

const letterIntro = document.getElementById("letterIntro");

const openText = document.getElementById("openText");

const letterText = document.getElementById("letterText");

const giftBox = document.getElementById("giftBox");

const loveText = document.getElementById("loveText");


/*=========================
    GLOBAL STATE
=========================*/

let typingFinished = false;
let letterOpened = false;
let giftOpened = false;
let finaleStarted = false;


/*=========================
    INTRO
=========================*/

startBtn.addEventListener("click", startExperience);

function startExperience() {

    startMusic();

    showWebsite();

    initializeBackground();

    startLandingSequence();

}


/*=========================
    SHOW WEBSITE
=========================*/

function showWebsite() {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        website.style.display = "block";

    }, 1200);

}


/*=========================
    MUSIC
=========================*/

function startMusic() {

    bgMusic.volume = 0;

    bgMusic.play().catch(() => {});

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 1) {

            volume = 1;

            clearInterval(fade);

        }

        bgMusic.volume = volume;

    }, 100);

}


/*=========================
    CURSOR GLOW
=========================*/

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});


/*=========================
    BACKGROUND
=========================*/

function initializeBackground() {

    createStars();

    createClouds();

    startFloatingHearts();

    startShootingStars();

}


/*=========================
    PLACEHOLDERS
    (Implemented in next parts)
=========================*/

function createStars() {}

function createClouds() {}

function startFloatingHearts() {}

function startShootingStars() {}

function startLandingSequence() {}

/*=========================================================
    SCRIPT.JS - PART 2
    BACKGROUND ENGINE
=========================================================*/


/*=========================
    STARS
=========================*/

function createStars() {

    for (let i = 0; i < 320; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 2.5 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.opacity = Math.random();

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        stars.appendChild(star);

    }

}


/*=========================
    CLOUDS
=========================*/

function createSingleCloud() {

    const cloud = document.createElement("div");

    cloud.className = "cloud";

    cloud.style.top = Math.random() * 35 + "%";

    cloud.style.animationDuration =
        (45 + Math.random() * 20) + "s";

    clouds.appendChild(cloud);

    setTimeout(() => {

        cloud.remove();

    }, 70000);

}

function createClouds() {

    for (let i = 0; i < 4; i++) {

        setTimeout(createSingleCloud, i * 2500);

    }

    setInterval(createSingleCloud, 14000);

}


/*=========================
    FLOATING HEARTS
=========================*/

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (16 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 4) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

function startFloatingHearts() {

    createHeart();

    setInterval(createHeart, 700);

}


/*=========================
    SHOOTING STARS
=========================*/

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    const length=120+Math.random()*120;

    star.style.width=length+"px";

    star.style.left=(20+Math.random()*80)+"%";

    star.style.top=Math.random()*40+"%";

    star.style.opacity=.5+Math.random()*.5;

    star.style.animationDuration=
        (2+Math.random()*1.5)+"s";

    shootingStars.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1800);

}

function startShootingStars(){

    // Create 5 stars immediately

    for(let i=0;i<5;i++){

        setTimeout(createShootingStar, i*700);

    }

    // Keep adding stars continuously

    setInterval(()=>{

        for(let i=0;i<3;i++){

            setTimeout(createShootingStar, i*600);

        }

    },2500);

}

/*=========================================================
    SCRIPT.JS - PART 3
    LANDING + TYPING + TIMELINE
=========================================================*/


/*=========================
    LANDING SEQUENCE
=========================*/

const landingLines = [

    "Hii Himanshi...❤️",

    "1st june isn't just an another day... 😊",

    "It's the birthday of a princess ❤️"

];

const birthdayMessage =

`Happy Birthday 🥳🎂
Himanshi 😊 `;


/*=========================
    START LANDING
=========================*/

async function startLandingSequence(){

    typingText.innerHTML = "";

    birthdayTitle.innerHTML = "";

    birthdayTitle.style.opacity = "0";

    for(const line of landingLines){

        await typeLine(line);

        await delay(900);

        typingText.innerHTML += "<br><br>";

    }

    await delay(1200);

    typingText.style.transition = "1s";

    typingText.style.opacity = "0";

    typingText.style.transform = "translateY(-30px)";

    await delay(1200);

    typingText.style.display = "none";

    birthdayTitle.style.display = "block";

    birthdayTitle.innerHTML = birthdayMessage;

    birthdayTitle.style.fontSize = "70px";

    birthdayTitle.style.fontWeight = "300";

    birthdayTitle.style.lineHeight = "1.4";

    birthdayTitle.style.opacity = "1";

    birthdayTitle.style.transition = "1.5s";

    birthdayTitle.classList.add("fadeIn");

    typingFinished = true;

    await delay(3500);

    document
        .getElementById("timeline")
        .scrollIntoView({

            behavior:"smooth"

        });

}


/*=========================
    TYPEWRITER
=========================*/

async function typeLine(text){

    const line = document.createElement("span");

    typingText.appendChild(line);

    for(const ch of text){

        line.innerHTML += ch;

        await delay(45);

    }

}


/*=========================
    DELAY
=========================*/

function delay(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}


/*=========================
    TIMELINE REVEAL
=========================*/

const timelineObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.25

}

);


memories.forEach(memory=>{

    timelineObserver.observe(memory);

});

/*=========================================================
    SCRIPT.JS - PART 4
    COUNTDOWN + LETTER
=========================================================*/


/*=========================
    COUNTDOWN
=========================*/

const startDate = new Date("September 10, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (elapsed % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (elapsed % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (elapsed % (1000 * 60)) /
        1000
    );

    updateBox(dayBox, days);
    updateBox(hourBox, hours);
    updateBox(minuteBox, minutes);
    updateBox(secondBox, seconds);

}

setInterval(updateCountdown, 1000);

updateCountdown();


/*=========================
    UPDATE NUMBER
=========================*/

function updateBox(element, value) {

    const newValue = String(value).padStart(2, "0");

    if (element.innerHTML !== newValue) {

        element.innerHTML = newValue;

        element.parentElement.classList.remove("active");

        void element.parentElement.offsetWidth;

        element.parentElement.classList.add("active");

    }

}


/*=========================
    LETTER
=========================*/

const letterMessage = `Happy Birthday, Himanshi ❤️

Every moment with you has become one of the most beautiful memories of my life 💕.
Pta h jab jab tumse baat krta hu 😊, mann shant ho jata h thank you for your smile 🤗,
I know a cute little princess is reading this 🥰
Thank you cutie for your kindness 😊 and for simply being you 🤗.

Happy Birthday once again, Himanshi 🥰.

haan jate jate ek question
are u happy ? 🥺 yes press krdo na pls next gift bhi h abhi`;


/*=========================
    OPEN ENVELOPE
=========================*/

envelope.addEventListener("click", () => {

    if(letterOpened) return;

    letterOpened = true;

    burstHearts();

    openText.style.display = "none";

    envelope.style.transition = ".8s";

    envelope.style.opacity = "0";

    envelope.style.transform = "scale(.6)";

    setTimeout(() => {

        envelope.style.display = "none";

        letterOverlay.classList.add("show");

        setTimeout(() => {

            letterIntro.classList.add("show");

        },300);

        setTimeout(() => {

            letterIntro.classList.add("hide");

        },3200);

        setTimeout(() => {

            letterIntro.style.display="none";

            letterPage.classList.add("show");

        },4300);

        setTimeout(() => {

            typeLetter();

        },4700);

    },700);

});

function burstHearts(){

    const rect = envelope.getBoundingClientRect();

    const centerX = rect.left + rect.width/2;

    const centerY = rect.top + rect.height/2;

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=centerX+"px";

        heart.style.top=centerY+"px";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*120;

        heart.animate(

        [

        {

            transform:"translate(0,0) scale(.5)",

            opacity:1

        },

        {

            transform:
            `translate(${Math.cos(angle)*distance}px,
            ${Math.sin(angle)*distance}px)
            scale(1.5)`,

            opacity:0

        }

        ],

        {

            duration:900,

            easing:"ease-out"

        });

        setTimeout(()=>heart.remove(),900);

    }

}

/*=========================
    LETTER TYPING
=========================*/

async function typeLetter(){

    letterText.innerHTML="";

    const cursor=document.createElement("span");

    cursor.innerHTML="▌";

    cursor.style.animation="blink .9s infinite";

    letterText.appendChild(cursor);

    let count = 0;

    for(const ch of letterMessage){

        cursor.remove();

        letterText.innerHTML += ch;

        letterText.appendChild(cursor);

        count++;

        if(count % 5 === 0){

            letterPage.scrollTo({

                top: letterPage.scrollHeight,

                behavior: "smooth"

            });

        }

        if(".!?,".includes(ch)){

            await delay(210);

        }

        else if(ch=="\n"){

            await delay(210);

        }

        else{

            await delay(65);

        }

    }

    cursor.remove();

    const btn = document.createElement("button");

    btn.id = "closeLetter";

    btn.innerHTML = "❤️ Yes ❤️";

    letterText.appendChild(document.createElement("br"));
    letterText.appendChild(document.createElement("br"));
    letterText.appendChild(btn);

    // Smoothly scroll to the very bottom so the button is visible
    setTimeout(() => {

        letterPage.scrollTo({

            top: letterPage.scrollHeight,

            behavior: "smooth"

        });

    }, 100);

    btn.onclick = () => {

        letterPage.classList.remove("show");

        setTimeout(() => {

            letterOverlay.classList.remove("show");

            document
                .getElementById("gift")
                .scrollIntoView({

                    behavior:"smooth"

                });

        },700);

    };

}

/*=========================================================
        CINEMATIC FINALE ENGINE (C1)
=========================================================*/

const giftPage = document.getElementById("gift");
const cakeCelebration = document.getElementById("cakeCelebration");

const fireworksLayer = document.getElementById("fireworksLayer");
const sparkleLayer = document.getElementById("sparkleLayer");
const heartLayer = document.getElementById("heartLayer");
const confettiLayer = document.getElementById("confettiLayer");

// ---------- Elements ----------



const messageScene = document.getElementById("messageScene");
const blackScene = document.getElementById("blackScene");
const flameScene = document.getElementById("flameScene");
const celebrationScene = document.getElementById("celebrationScene");

const celebrationMusic = document.getElementById("cakeMusic");
const pianoMusic = document.getElementById("bgMusic");



giftBox.addEventListener("click", openGift);

//=========================================================

function openGift(){

    if(finaleStarted) return;

    finaleStarted = true;

    giftBox.classList.add("open");

    setTimeout(startFinale,1000);

}

//=========================================================

function startFinale(){

    // hide gift page

    giftPage.style.display = "none";

    // show celebration container

    cakeCelebration.classList.add("show");

    showMessageScene();

}

//=========================================================

function hideAllScenes(){

    messageScene.classList.remove("active");

    blackScene.classList.remove("active");

    flameScene.classList.remove("active");

    celebrationScene.classList.remove("active");

}

//=========================================================

function showMessageScene(){

    hideAllScenes();

    messageScene.classList.add("active");

    // Today -> Tomorrow -> Forever

    setTimeout(showBlackScene,5000);

}

//=========================================================

function showBlackScene(){

    hideAllScenes();

    blackScene.classList.add("active");

    setTimeout(showFlameScene,1000);

}

//=========================================================

function showFlameScene(){

    hideAllScenes();

    flameScene.classList.add("active");

    // after flames are visible

    setTimeout(showCelebrationScene,2500);

}

//=========================================================

function showCelebrationScene(){

    hideAllScenes();

    celebrationScene.classList.add("active");

    crossFadeMusic();

    startCelebrationEffects();

}

//=========================================================

function crossFadeMusic(){

    if(pianoMusic){

        pianoMusic.pause();

    }

    if(celebrationMusic){

        celebrationMusic.currentTime = 0;

        celebrationMusic.volume = 0;

        celebrationMusic.play().catch(()=>{});

        let volume = 0;

        const fade = setInterval(()=>{

            volume += 0.05;

            celebrationMusic.volume = Math.min(volume,1);

            if(volume>=1){

                clearInterval(fade);

            }

        },200);

    }

}

//=========================================================

function startCelebrationEffects(){

    startSparkles();

    startFireworks();

    startConfetti();

    startFinalHearts();

}

/*=========================================================
        CELEBRATION EFFECTS (C2)
=========================================================*/

//---------------------------------------------------------
// SPARKLES
//---------------------------------------------------------

function startSparkles(){

    setInterval(createSparkle,180);

}

function createSparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=(55+Math.random()*30)+"vh";

    sparkleLayer.appendChild(s);

    setTimeout(()=>s.remove(),3000);

}

//---------------------------------------------------------
// FIREWORKS
//---------------------------------------------------------

function startFireworks(){

    setInterval(()=>{

        for(let i=0;i<3;i++){

            setTimeout(createFirework,i*180);

        }

    },1800);

}

function createFirework(){

    const f=document.createElement("div");

    f.className="firework";

    const colours=[

        "#ff4d6d",
        "#ffd93d",
        "#6bcBff",
        "#ffffff",
        "#ff9ff3",
        "#7eff7e"

    ];

    f.style.background=

        colours[Math.floor(Math.random()*colours.length)];

    f.style.left=(15+Math.random()*70)+"vw";

    f.style.top=(8+Math.random()*35)+"vh";

    fireworksLayer.appendChild(f);

    setTimeout(()=>f.remove(),1700);

}

//---------------------------------------------------------
// CONFETTI
//---------------------------------------------------------

function startConfetti(){

    setInterval(()=>{

        for(let i=0;i<10;i++){

            createConfetti();

        }

    },700);

}

function createConfetti(){

    const c=document.createElement("div");

    c.className="confetti";

    const colours=[

        "#ff4d6d",
        "#ffd93d",
        "#4cd964",
        "#4dabff",
        "#ffffff",
        "#ff9ff3"

    ];

    c.style.background=

        colours[Math.floor(Math.random()*colours.length)];

    c.style.left=Math.random()*100+"vw";

    c.style.animationDuration=

        (4+Math.random()*3)+"s";

    confettiLayer.appendChild(c);

    setTimeout(()=>c.remove(),7000);

}

//---------------------------------------------------------
// HEARTS
//---------------------------------------------------------

function startFinalHearts(){

    setInterval(createFinalHeart,900);

}

function createFinalHeart(){

    const h=document.createElement("div");

    h.className="finalHeart";

    h.innerHTML="❤️";

    h.style.left=(10+Math.random()*80)+"vw";

    h.style.fontSize=(20+Math.random()*25)+"px";

    heartLayer.appendChild(h);

    setTimeout(()=>h.remove(),7000);

}


