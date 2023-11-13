//Resources
let memberVideos = ["../assets/videos/Minji.mp4", "../assets/videos/Hani.mp4", "../assets/videos/Danielle.mp4", "../assets/videos/Haerin.mp4", "../assets/videos/Hyein.mp4"];

//Get Parameter & Index
var url_param = new URLSearchParams(window.location.search);
param = url_param.get('member').toLowerCase();

let index;

switch(param) {
    case "minji":
        index = 0;
        break;
    case "hani":
        index = 1;
        break;
    case "danielle":
        index = 2;
        break;
    case "haerin":
        index = 3;
        break;
    case "hyein":
        index = 4;
        break;
    default:
        console.log("Parameter fault");
        $('#video-player').attr('src', memberVideos[index]);
}


//Change video regarding parameter value
let video = memberVideos[index];

$('#video-player').attr('src', video);
$('#desc video')[0].load();

$('#desc video').hover(function () {
    
});