let musicPlaylist = [
    {
        name: "Love Nwantiti",
        artist: "Ckey",
        image: "Album/1.jpg",
        path: "https://dl1.axofile.xyz/ddl/dcf967e3cee8faf5667164d8fd12f95f/amitmusic+wapaxo+com/Love%20Nwantinti.mp3"
    },
    {
        name: "Bilionera",
        artist: "Otilia",
        image: "Album/2.jpg",
        path: "http://pagalworld4u.wapkiz.com/filedownload/820307/Bilionera-Otilia-(pagalworld4u.wapkiz.com).mp3"
    },
    {
        name: "Never Give Up",
        artist: "Sia",
        image: "Album/3.jpg",
        path: "https://cdnsongs.com/music/data/Punjabi/201908/Red_Alert_2/128/Never_Give_Up.mp3",
    },
    {
        name: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        image: "Album/4.jpg",
        path: "https://dl1.axofile.xyz/ddl/dcf967e3cee8faf5667164d8fd12f95f/amitmusic+wapaxo+com/Love%20Nwantinti.mp3",
    },
    {
        name: "Devil Eyes",
        artist: "Hippie Sabotage",
        image: "Album/5.jpg",
        path: "https://www.downloadmobileringtones.com/ringtones/Hum-Katha-Sunate-Flute-Ringtone-2022-Download-dmr.mp3",
    },
    {
        name: "Cheap Thrills",
        artist: "Sia",
        image: "Album/6.jpg",
        path: "https://www.downloadmobileringtones.com/ringtones/Christmas-Ringtone-Free-Download-Android-dmr.mp3",
    },
    {
        name: "Beliver",
        artist: "Imagine Dragouns",
        image: "Album/7.jpg",
        path: "https://www.downloadmobileringtones.com/ringtones/King-Tu-Aake-Dekhle-The-Carnival-Ringtone-dmr.mp3",
    },
    {
        name: "Stay",
        artist: "The Kid",
        image: "Album/8.jpg",
        path: "https://www.downloadmobileringtones.com/ringtones/Rait-Zara-Si-Atrangi-Re-Ringtone-Download-dmr.mp3",
    },
    {
        name: "Closer",
        artist: "The Chainsmokers",
        image: "Album/9.jpg",
        path: "https://www.downloadmobileringtones.com/ringtones/Punjabi-Ringtone-2019-mr-jatt-1040-dmr.mp3",
    },
    {
        name: "Shape of You",
        artist: "Ed Sheeran",
        image: "Album/10.jpg",
        path: "https://cdnsongs.com/music/data/Punjabi/201908/Red_Alert_2/128/Never_Give_Up.mp3",
    },
];

// Control buttons
let playpauseBtn = document.querySelector(".playpause");
let nextBtn = document.querySelector(".next-song");
let prevBtn = document.querySelector(".prev-song");

let progressBar = document.querySelector(".progressed");
let progressLine = document.querySelector(".progress-bar");

//Album Details
let musicAlbum = document.querySelector(".poster-img");
let musicName = document.querySelector(".song-name");
let musicArtist = document.querySelector(".singer-name");

let isPlaying = false;
let playlistIndex = 0;

//create a audio element
let currentSong = document.createElement('audio');

window.addEventListener('load',() => {
    currentSong.src = musicPlaylist[0].path;
    musicAlbum.src = musicPlaylist[0].image;
    musicName.textContent = musicPlaylist[0].name;
    musicArtist.textContent = musicPlaylist[0].artist;
})

const set = (index) => {
    currentSong.src = musicPlaylist[index].path;
    musicAlbum.src = musicPlaylist[index].image;
    musicName.textContent = musicPlaylist[index].name;
    musicArtist.textContent = musicPlaylist[index].artist;
}

const loadSong = (playlistIndex) => {
    currentSong.src = musicPlaylist[playlistIndex].path;
    musicAlbum.src = musicPlaylist[playlistIndex].image;
    musicName.textContent = musicPlaylist[playlistIndex].name;
    musicArtist.textContent = musicPlaylist[playlistIndex].artist;
}

const playpauseTrack = () => {
    // pause and play music
    if (!isPlaying) playSong();
    else pauseSong();
}

const playSong = () => {
    //play audio
    currentSong.play();
    isPlaying = true;
    //change the icon
    playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

const pauseSong = () => {
    // Pause audio
    currentSong.pause();
    isPlaying = false;
    // change the icon
    playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

const nextSong = () => {
    // Go back to the first track if the
    // current one is the last in the track list
    if (playlistIndex < musicPlaylist.length - 1)
        playlistIndex += 1;
    else playlistIndex = 0;

    // Load and play the new track
    loadSong(playlistIndex);
    playSong();
}

const prevSong = () => {
    // Go back to the last track if the
    // current one is the first in the track list
    if (playlistIndex > 0)
        playlistIndex -= 1;
    else playlistIndex = musicPlaylist.length - 1;

    // Load and play the new track
    loadSong(playlistIndex);
    playSong();
}


currentSong.ontimeupdate = () => {
    progressBar.style.width = Math.floor(currentSong.currentTime * 100 / currentSong.duration) + '%';
}

progressLine.onclick = (e) => {
    currentSong.currentTime = ((e.offsetX / progressLine.offsetWidth) * currentSong.duration);
}

const buildTable = (data) => {
    photo = document.querySelector(".songlist");

    for (let i = 0; i < data.length; i++) {

        var row = `<div class="songitem mb-1">
            <img src="${data[i].image}" class="avtar" alt="1">
            <p class="listsongname">${data[i].name}</p>
            <div class = "playbtn">
                 <i class="fa fa-play-circle icon"></i>
            </div>
          </div>`

        photo.innerHTML += row;
    }
}

buildTable(musicPlaylist);

let listIcon = document.querySelectorAll('.playbtn');



listIcon.forEach((ele, index) => {
    ele.addEventListener("click", (event) => {
        if (!isPlaying) event.target.parentNode.innerHTML = '<i class="fa fa-pause-circle icon"></i>';
        else event.target.parentNode.innerHTML = '<i class="fa fa-play-circle icon"></i>';
        //currentSong.src = musicPlaylist[index].path;
        //musicAlbum.src = musicPlaylist[index].image;
        loadSong(index);
        playpauseTrack(event.target.parentNode);
    })
})

listIcon.onclick = (event) => {
    console.log("hello")


}


//const test=document.querySelectorAll(".test");
//console.log(test);