$(document).ready(function () {
    $("#adminName").keyup(function () {
        $("#telp").slideDown();
    });
    $("#telp").keyup(function () {
        $("#pesanelektrik").fadeIn();
    });
    $("#pesanelektrik").keyup(function () {
        $("#line").slideDown();
    });
    $("#line").keyup(function () {
        $("#join").fadeIn();
    });
    $("#join").keyup(function () {
        $("#experience").fadeIn();
    });
});

$(document).ready(function () {
    $("#submit").click(function () {
        alert("Terimakasih telah mengisi")
    });
});