const artist = "idris mohammed"
const songname = "loran's dance"

query = artist + " " + songname
const myUrlWithParams = new URL("https://songwhip.com/create?q=");

console.log(myUrlWithParams+query)