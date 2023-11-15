//Resources
let memberVideos = ["../assets/videos/Minji.mp4", "../assets/videos/Hani.mp4", "../assets/videos/Danielle.mp4", "../assets/videos/Haerin.mp4", "../assets/videos/Hyein.mp4"];
let memName = ["민지", "하니", "다니엘", "해린", "혜인"];
let stageName = ["Minji (민지)", "Hanni (하니)", "Danielle (다니엘)", "Haerin (해린)", "Hyein (혜인)"];
let birthName = ["Kim Minji (김민지)", "Hanni Pham", "Danielle Marsh", "Kang Haerin (강해린)", "Lee Hyein (이혜인)"];
let otherName = ["Isabelle", "Phạm Ngọc Hân", "Mo Jihye (모지혜)", "Vanessa Kang", "Grace Lee"];
let position = ["Rapper", "Vocalist", "-", "-", "Maknae"];
let birthDay = ["May 7, 2004", "October 6, 2004", "April 11, 2005", "May 15, 2006", "April 21, 2008"];
let zodiac = ["Taurus", "Libra", "Aries", "Taurus", "Taurus"];
let chZodiac = ["Monkey", "Monkey", "Rooster", "Dog", "Rat"];
let height = ["169 cm (5'6'')", "161.7 cm (5'3'')", "165 cm (5'5'')", "164.5 cm (5'5'')", "170 cm (5'7'')"];
let weight = ["-", "-", "-", "-", "-"];
let bloodType = ["A", "O", "AB", "B", "O"];
let mbti = ["ESTJ-T", "INFP", "ENFP", "ISTP", "INFP (Her former result was ENFP)"];
let nationality = ["Korean", "Vietnamese-Australian", "Korean-Australian", "Korean", "Korean"];
let repColor = ["Yellow", "Pink", "Green", "White", "Light Blue"];
let repEmoji = ["🐻", "🐰", "🐶", "🐹", "🐣"];

//Get Parameter & Index
var url_param = new URLSearchParams(window.location.search);
param = url_param.get('member');

let index;

//Check if parameter is not present
if (param == null || param == 0) {
    index = 0;
    changeParam();
} else {
    param = param.toLowerCase();
}


$(document).ready(function() {
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
})

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
})

$("#next").click(function() {
    index++;
    
    if (index > 4) {
        index  = 0;
    }

    changeParam();
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
    changeVideo();
}

//Change video regarding parameter value
function changeVideo() {
    let video = memberVideos[index];
    
    $('#video-player').attr('src', video);
    $('#desc video')[0].load();
    
    $('#desc video').hover(function () {
        
    });
    changeDesc();
}

//Change member description
function changeDesc() {
    $("#mem-name").append(memName[index]);
    let element = document.getElementById("member-info").getElementsByTagName("li");
    let list = element.length;
    let changeList = [stageName, birthName, otherName, position, birthDay, zodiac, chZodiac, height, weight, bloodType, mbti, nationality, repColor, repEmoji];

    switch(index) {
        case 1:
            $(element[2]).text("Vietnamese Name: ");
            break;
        case 3:
            $(element[2]).text("Korean Name: ");
            break;
    }

    for (let i = 0; i < list; i++) {
        $(element[i]).append(changeList[i][index]);
    }
}