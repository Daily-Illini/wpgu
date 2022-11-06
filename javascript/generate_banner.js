// DO NOT ALTER THIS CODE. To update the banner, please edit the banner.json file :)
const body = document.querySelector('body');

fetch("../javascript/banner.json")
.then(response => response.json())
.then(data => showInfo(data));

function showInfo(data) {
    console.log(data);
    if (data["banner"]["show_banner"]  == true) {
        const banner = document.createElement('div')
        banner.id = "banner";
        banner.style.backgroundColor = data["banner"]["background_hex_color"]

        const banner_content = document.createElement('div')
        banner_content.id = "banner-content";
    

        const banner_body = document.createElement('div')
        banner_body.textContent = data["banner"]["body_text"]
        banner_body.style.color =  data["banner"]["text_hex_color"]

        const banner_callout = document.createElement('div')
        banner_callout.id = "banner-callout";
        banner_callout.textContent = data["banner"]["heading_text"]
        banner_callout.style.color =  data["banner"]["text_hex_color"]

    
        banner_content.appendChild(banner_callout)
        banner_content.append(banner_body)
        banner.appendChild(banner_content)

        body.appendChild(banner)


        console.log()
        document.querySelector('#filler').style.height = String(banner.getBoundingClientRect()["height"]).concat("px")
        
    }
}
