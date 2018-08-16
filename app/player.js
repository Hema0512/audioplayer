var songs=["01.mp3",
           "02.mp3",
	   "07.ogg",
           "lion.wav"];

var songTitle=document.getElementById('songTitle');
var songSlider=document.getElementById('songSlider');
var currentTime=document.getElementById('currentTime');
var duration=document.getElementById('duration');
var volumeSlider=document.getElementById('volumeSlider');
//var nextSongTitle=document.getElementById('nextSongTitle');

var song =new Audio();  //creating new audio object
var currentSong =0; //variable to track the current song

window.onload =loadSong;

function loadSong (){
    song.src="songs/" + songs[currentSong]; //songs array with the index gives the first song
    songTitle.textContent= songs[currentSong]; // shows the song title
    //songTitle.textContent= (currentSong+1) + "." + songs[currentSong]; //shows the song title with number
    //nextSongTitle.innerHTML= "<b>NextSong: </b>" + songs[currentSong + 1 % songs.length];
    song.volume=volumeSlider.value;
    song.play();
    setTimeout(showDuration, 1000);
    
}
setInterval(updateSongSlider, 1000);

function updateSongSlider(){
    var c = Math.round(song.currentTime);
    songSlider.value = c;
    currentTime.textContent =convertTime(c);
    if(song.ended) {
        next();
    }
}

function convertTime(secs){
    var min = Math.floor(secs/60);
    var sec = secs % 60;
    min=(min < 10) ? "0" + min: min;
    sec=(sec < 10) ? "0" + sec: sec;
    return(min + ":" + sec);
}

function showDuration(){
    var d= Math.floor(song.duration);
    songSlider.setAttribute("max",d);
    duration.textContent=convertTime(d);
}

function playOrPauseSong(img){
    if(song.paused) {
        song.play();
        img.src= "images/pause.png";
    }else {
        song.pause();
        img.src ="images/play.png";
    }
}

function next(){
    currentSong =currentSong + 1 % songs.length;
    if(currentSong>3){
        currentSong=0;
    }
    loadSong();
}

function previous(){
    currentSong--;
    currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
    loadSong();
}

function seekSong(){
    song.currentTime= songSlider.value;
    currentTime.textContent = convertTime(song.currentTime);
}

function adjustVolume(){
    song.volume= volumeSlider.value;
}

function mute(){
    song.muted=true;
}

function unmute() {
    song.muted=false;
}


