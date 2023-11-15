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

changeVideo();

$("#desc").mouseenter(function() {
    $("#member-info").css({
        "height": "100%",
        "background-color": "rgba(52, 40, 143, 0.5)",
        "opacity": "1",
        "transition": "all 0.4s ease"
    })
})

$("#desc").mouseleave(function() {
    $("#member-info").css({
        "height": "1px",
        "opacity": "0",
        "transition": "all 0.4s ease"
    })
})

$("#prev").click(function() {
    index--;
    
    if (index < 0) {
        index  = 4;
    }

    changeParam();
    changeVideo();
})

$("#next").click(function() {
    index++;
    
    if (index > 4) {
        index  = 0;
    }

    changeParam();
    changeVideo();
})


//Function Change url param
function changeParam() {
    let memberName;
    switch(index) {
        case 0:
            memberName = "minji";
            break;
        case 1:
            memberName = "hani";
            break;
        case 2:
            memberName = "danielle";
            break;
        case 3:
            memberName = "haerin";
            break;
        default:
            memberName = "hyein";
    }

    let url = new window.URL(document.location);
    url.searchParams.set('member', memberName);
    window.location.href = url.href;

}

//Change video regarding parameter value
function changeVideo() {
    let video = memberVideos[index];
    
    $('#video-player').attr('src', video);
    $('#desc video')[0].load();
    
    $('#desc video').hover(function () {
        
    });
}