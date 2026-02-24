let arr = [
    {
        name: "Dhurandhar",
        song: "./Audio/Dhurandhar - Title Track Ranveer Singh, Shashwat Sachdev, Hanumankind, Jasmine Sandlas,Aditya Dhar.mp3",
        image: "./images/Dhurander.jpg",
        about: "High-energy rap anthem."
    },
    {
        name: "Boyfriend",
        song: "./Audio/BOYFRIEND(MUSIC VIDEO) KARAN AUJLA_ SUNANDA _ IKKY _ Latest Punjabi Songs 2025.mp3",
        image: "./images/karan.jpg",
        about: "Romantic Punjabi vibe."
    },
    {
        name: "Flipperachi",
        song: "./Audio/Fa9la - Flipperachi (Prod. by DJ Outlaw) (Official Audio) فصلة - فليبراتشي.mp3",
        image: "./images/rehman.jpg",
        about: "Stylish Arabic rap."
    },
    {
        name: "Marri2",
        song: "./Audio/Maari 2 - Rowdy Baby (Video Song) Dhanush, Sai Pallavi Yuvan Shankar Raja Balaji Mohan.mp3",
        image: "./images/Marri.jpg",
        about: "Energetic Tamil dance hit."
    },
    {
        name: "MILLIONAIRE",
        song: "./Audio/honeysong.mp3",
        image: "./images/Millionaire.jpg",
        about: "Upbeat commercial track."
    },
    {
        name: "Phur",
        song: "./Audio/kapil.mp3",
        image: "./images/kapil.jpg",
        about: "Soft emotional melody."
    }
];

let cardSection = document.querySelector(".cardSection");

arr.forEach((element,index) => {

    cardSection.innerHTML+=` <div class="items" id="${index}">
                <div class="imgsection">
                    <img src="${element.image}" alt="">
                </div>
                <div class="bottom">
                    <h3>${element.name}</h3>
                    <p>${element.about}</p>
                </div>
            </div>
    `;

});

imageIcon=document.querySelector(".left")
const song = new Audio("./Audio/Fa9la - Flipperachi (Prod. by DJ Outlaw) (Official Audio) فصلة - فليبراتشي.mp3");
song_heading=document.querySelector(".song-heading");
song_by=document.querySelector(".song-by")
player_image=document.querySelector(".player-image");
let selectedsong=0;
cardSection.addEventListener("click",function(e)
{
    selectedsong=e.target.id;
    song.src=arr[e.target.id].song
    song.play();
    song_heading.textContent=arr[e.target.id].name;
    song_by.textContent=arr[e.target.id].about;
    player_image.src=arr[e.target.id].image;
    play.classList.remove("ri-play-fill");
    play.classList.add("ri-pause-line");
})



play=document.querySelector(".ri-play-fill");

play.addEventListener("click",function()
{
    if(song.paused)
    {
        song.play();
        play.classList.remove("ri-play-fill");
        play.classList.add("ri-pause-line");
    }
    else{
        song.pause();
        play.classList.add("ri-play-fill");
        play.classList.remove("ri-pause-line");
    }

})

total=document.querySelector(".total");
current=document.querySelector(".current");
progress=document.querySelector(".inner");

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}
song.addEventListener("loadedmetadata", () => {
    total.textContent = formatTime(song.duration);

});

song.addEventListener("timeupdate", () => {

    current.textContent=formatTime(song.currentTime)
    const progressPercent = (song.currentTime / song.duration) * 100;

    progress.style.width = progressPercent + "%";
});

let backward=document.querySelector(".ri-skip-back-fill");

backward.addEventListener("click",function(e)
{
    if(selectedsong>0)
    {
        selectedsong--;
        song.src=arr[selectedsong].song
        song.play();
        song_heading.textContent=arr[selectedsong].name;
        song_by.textContent=arr[selectedsong].about;
        player_image.src=arr[selectedsong].image;
        play.classList.remove("ri-play-fill");
        play.classList.add("ri-pause-line");
    }

})

let forward=document.querySelector(".ri-skip-forward-fill");

forward.addEventListener("click",function(e)
{
    if(selectedsong<arr.length-1)
    {
        selectedsong++;
        song.src=arr[selectedsong].song
        song.play();
        song_heading.textContent=arr[selectedsong].name;
        song_by.textContent=arr[selectedsong].about;
        player_image.src=arr[selectedsong].image;
        play.classList.remove("ri-play-fill");
        play.classList.add("ri-pause-line");

    }
    
})
