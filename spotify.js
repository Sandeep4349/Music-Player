let play = document.getElementById("play");
let audio = document.getElementById("audio"); // Make sure your <audio> has id="audio"
let image= document.getElementById("img");
let trackName=document.getElementById("trackName");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let duration=document.getElementById("duration");
let currentTime=document.getElementById("cttime");
let progress=document.getElementById("progress-bar");
let volumeup = document.getElementById("volumeup");
let volumedown = document.getElementById("volumedown");
let playicon=play.querySelector("i");
let currentIndex = 0;

// Array of audio tracks
let audioTrack = ["song1.mp3", "song2.mp3","Tum.mp3","gund.mp3","kurch.mp3"];
 
let images=["ht1.jpg","img2.jpeg","img3.jpeg","image4.jpeg","img5.jpg"];

let trackNames=[
    "Pasandh","DJ Tillu","Tum hi ho","gundellona","kurchi"
];

function formatTime(seconds){
    let min=Math.floor(seconds/60);
    let sec=Math.floor(seconds%60);
    sec=(sec<10? '0' +sec:sec);
    return `${min}:${sec}`;
}

// Set initial track
audio.src = audioTrack[currentIndex];
image.src = images[currentIndex];
trackName.textContent = trackNames[currentIndex];

audio.addEventListener("loadedmetadata",function(){
    duration.textContent=formatTime(audio.duration);
    progress.max=audio.duration;
});


audio.addEventListener("timeupdate",function(){
    console.log(audio.currentTime);
    currentTime.textContent=formatTime(audio.currentTime);

    progress.value=audio.currentTime;
});

//time changing
progress.addEventListener("input",function(){
    audio.currentTime=progress.value;
});

audio.addEventListener("ended",function(){
    nextButton.click();
});




// Play/Pause toggle
play.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playicon.classList.remove("bi","bi-play-fill");
        playicon.classList.add("bi","bi-pause-fill");
        image.classList.add('rotate');
    } else {
        audio.pause();
         playicon.classList.remove("bi","bi-pause-fill");
        playicon.classList.add("bi","bi-play-fill");
        image.classList.remove('rotate');
    }
});

// Next button
next.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= audioTrack.length) {
        currentIndex = 0;
    }
    audio.src = audioTrack[currentIndex];
    image.src=images[currentIndex];
    trackName.textContent=trackNames[currentIndex];
    audio.play();
     playicon.classList.remove("bi","bi-play-fill");
     playicon.classList.add("bi","bi-pause-fill");
});

// Previous button
prev.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = audioTrack.length - 1;
    }
    audio.src = audioTrack[currentIndex];
    image.src=images[currentIndex];
    trackName.textContent=trackNames[currentIndex];
    audio.play();
     playicon.classList.remove("bi","bi-play-fill");
    playicon.classList.add("bi","bi-pause-fill");
});

// Volume Up
volumeup.addEventListener("click", function () {
    if (audio.volume < 1) {
        audio.volume = Math.min(1, audio.volume + 0.2);
    }
});

// Volume Down
volumedown.addEventListener("click", function () {
    if (audio.volume > 0) {
        audio.volume = Math.max(0, audio.volume - 0.2);
    }
});

audio.addEventListener("ended",function(){
    next.click();
})