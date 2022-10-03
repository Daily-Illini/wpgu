const requestURL = 'https://streamdb8web.securenetsystems.net/player_status_update/WPGUFM_history.txt';

const section = document.querySelector('#recently-played-section');


function newSong(song) {

    const song_node = document.createElement('div')
    song_node.className = "recently-played-node";

    const song_image = document.createElement('img')
    song_image.className = "recently-played-image"

    const text_container = document.createElement("div")
    text_container.id = "recently-played-text"

    const song_title = document.createElement("div")
    song_title.id = "recently-played-title"
    song_title.textContent = song.title


    const song_artist = document.createElement("div")
    song_artist.id = "recently-played-artist"
    song_artist.textContent = song.artist

    const song_time = document.createElement("div")
    song_time.id = "recently-played-time"
    song_time.textContent = song.programStartTS


    if (song.cover.length != 0) {
        song_image.src = song.cover;
    } else {
        song_image.src = "../assets/placeholder.svg"
    }


    text_container.appendChild(song_title)
    text_container.appendChild(song_artist)


    section.appendChild(song_node).appendChild(song_image)
    section.appendChild(song_node).appendChild(text_container).appendChild(song_time)
    section.appendChild(song_node).appendChild(song_time)



}

function populate(obj) {
    for(let i = 1; i < obj.length; i++) {
        if (obj[i].duration == 0) {
            continue
        } else {
            newSong(obj[i])
            console.log(obj[i].title);
        }
    }
}

// document.getElementById("dynamicTitle").innerHTML = titleNode[0].childNodes[0].nodeValue;


fetch(requestURL)
    .then( res => { return res.json(); } )
    .then( data => { populate(data.playHistory.song); } )
    // .catch( err => { console.errror(error) } )
