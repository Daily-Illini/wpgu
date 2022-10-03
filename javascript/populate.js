var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        parseXML(this);
    }
};
xmlhttp.open("GET", "https://streamdb8web.securenetsystems.net/player_status_update/WPGUFM.xml", true);
xmlhttp.send();

function parseXML(xml) {
    var x, i, xmlDoc;
    xmlDoc = xml.responseXML;
    titleNode = xmlDoc.getElementsByTagName("title");
    artistNode = xmlDoc.getElementsByTagName("artist");
    imgNode = xmlDoc.getElementsByTagName("cover");

    document.getElementById("dynamicTitle").innerHTML = titleNode[0].childNodes[0].nodeValue;
    document.getElementById("dynamicArtist").innerHTML = artistNode[0].childNodes[0].nodeValue;
    document.getElementById("dynamicImg").src = imgNode[0].childNodes[0].nodeValue;

}
