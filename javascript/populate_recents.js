const requestURL = 'https://streamdb8web.securenetsystems.net/player_status_update/WPGUFM_history.txt';

const recently_played_section = document.querySelector('#recently-played-section');

function calculateTimeSince(then) {
    then.setHours(then.getHours() - 6)
    var now = new Date(Date.now())
    var diff = then - now
    var minutes = Math.floor(Math.abs((then - now)/60000))
    if (minutes >= 60)  {
        return "Over an hour ago"
    } else {
        return minutes + " minutes ago"
    }
}

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
    song_time.textContent = calculateTimeSince(new Date(song.programStartTS))  

    if (song.cover.length != 0 && String(song.cover).endsWith(".jpg")) {
        song_image.src = song.cover;
        song_image.alt = "Album art for " + song.title + " by " + song.artist

    } else {
        song_image.src = "./assets/placeholder.svg"
        song_image.alt = "Placeholder album art"

    }


    text_container.appendChild(song_title)
    text_container.appendChild(song_artist)

    recently_played_section.appendChild(song_node).appendChild(song_image)
    recently_played_section.appendChild(song_node).appendChild(text_container).appendChild(song_time)
    // recently_played_section.appendChild(song_node).appendChild(song_time)
}

function populate(songs) {
    dynamic_image = document.getElementById("dynamicImg")

    console.log(songs[0].cover.length)
    if (songs[0].cover.length != 0 && songs[0].cover.endsWith(".jpg")) {
        dynamic_image.src = songs[0].cover
    } else {
        dynamic_image.src = "./assets/placeholder.svg"
    }
    

    document.getElementById("dynamicTitle").innerHTML = songs[0].title
    document.getElementById("dynamicArtist").innerHTML = songs[0].artist
    
    for(let i = 1; i < songs.length; i++) {
        if (songs[i].duration == 0 || songs[i].title.length == 0 || String(songs[i].title).match(/COM[0-9]{4}/)) {
            continue
        } else {
            newSong(songs[i])
        }
    }
}

fetch(requestURL)
    .then( res => { return res.json(); } )
    .then( data => { populate(data.playHistory.song); } )
    // .catch( err => { console.errror(error) } )
