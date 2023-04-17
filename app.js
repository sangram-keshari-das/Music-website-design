const music = new Audio('vande.mp3');

// create Array 

const songs = [
    {
        id:'1',
        songName:` Tu hii to song <br>
        <div class="subtitle">Mohammad faiz</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Hum tumko nigahon mein <br>
        <div class="subtitle">udit narayan,shrya</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Merre song <br><div class="subtitle"> Mohammad faiz</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Tum sa koi pyara <br><div class="subtitle">Faiz & Arunita</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Chunari Chunari<br><div class="subtitle">Salman khan</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Sun meri sehezadi <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Dil meri na sune <br><div class="subtitle">Himesh reshammiya</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Chalti he kiya 9 se 12 <br><div class="subtitle">Himesh reshammiya</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `Chahunga main tujhe <br><div class="subtitle">Satyajit Jena</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Chahun main yanaa <br><div class="subtitle">vaibhavi arya</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Char bottle vodka <br><div class="subtitle">Honey singh</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Car me music baja <br><div class="subtitle">Neha kakkar</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Bulleya <br><div class="subtitle">ranbir kapoor</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `Buddhu sa mann <br><div class="subtitle">Arman mallick</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `Brown rang <br><div class="subtitle">Yo yo honey singh</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Break up party <br><div class="subtitle">Yo yo honey singh</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `roy song <br><div class="subtitle">Shushant kumar</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Bolo bom bom <br><div class="subtitle">RAj raneja</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Bolna song <br><div class="subtitle">Arman mallick</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Bole jo kayal bago mein <br><div class="subtitle">gourab thakur</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Bol do na zara <br><div class="subtitle">Sandeep thakur</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Bahut piyar karte he <br><div class="subtitle">Akshya kumar</div>`,
        poster: "img/32.jpg",
    },
    {
        id:"33",
        songName: `Blue eyes <br><div class="subtitle">yo yo Honey singh</div>`,
        poster: "img/33.jpg",
    },
    {
        id:"34",
        songName: `Bimar dil <br><div class="subtitle">Jubin nautiyal</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `Bhar do jholi meri <br><div class="subtitle">Salman khan</div>`,
        poster: "img/35.jpg",
    },
    {
        id:"36",
        songName: `ABCD 2 song <br><div class="subtitle">Sachin jigar</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `ABCD song <br><div class="subtitle">Sachin jigar</div>`,
        poster: "img/37.jpg",
    },
    {
        id:"38",
        songName: `Bewafa he tu <br><div class="subtitle">Sachin mishra</div>`,
        poster: "img/38.jpg",
    },
    {
        id:"39",
        songName: `suno ganpati bapa mariya <br><div class="subtitle">Barun dhawan</div>`,
        poster: "img/39.jpg",
    },
    {
        id:"40",
        songName: `Oonchi hai building 2.0 <br><div class="subtitle">Anu mallik</div>`,
        poster: "img/40.jpg",
    },
    {
        id:"41",
        songName: `Aa toh sahi <br><div class="subtitle">Neha kakkar</div>`,
        poster: "img/41.jpg",
    },
    {
        id:"42",
        songName: `Yaadan mein <br><div class="subtitle">sarakuh khan</div>`,
        poster: "img/42.jpg",
    },
    {
        id:"43",
        songName: `Piya more <br><div class="subtitle">Malika singh</div>`,
        poster: "img/43.jpg",
    },
    {
        id:"44",
        songName: `Mere rashke mar <br><div class="subtitle">Sachet parampara</div>`,
        poster: "img/44.jpg",
    },
    {
        id:"45",
        songName: `Socha hein <br><div class="subtitle">Jubin nutiyal</div>`,
        poster: "img/45.jpg",
    },
    {
        id:"46",
        songName: `Hawa Hawa <br><div class="subtitle">Mika singh</div>`,
        poster: "img/46.jpg",
    },
    {
        id:"47",
        songName: `Haathon me thhe haath <br><div class="subtitle">Mubarakan</div>`,
        poster: "img/47.jpg",
    },
    {
        id:"48",
        songName: `Dil dhode ke louder louder <br><div class="subtitle">tony kakkar</div>`,
        poster: "img/48.jpg",
    },
    {
        id:"49",
        songName: `The google song <br><div class="subtitle">prakriti kakar</div>`,
        poster: "img/49.jpg",
    },
    {
        id:"50",
        songName: `Ghar song <br><div class="subtitle">Jubin nutiyal</div>`,
        poster: "img/50.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})