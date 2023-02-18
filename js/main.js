
// setTimeout(init, 1000);
var audiobg = new Audio('audio/loveaudio.mp3');
var audiolove = new Audio('audio/okkk.mp3');

document.getElementById('alll').style.display = "none"
function playy() {
    document.getElementById('modal_body1').style.display = "none"
    document.getElementById('modal_body2').style.display = "grid"
    audiolove.play()
}

function playy2() {
    audiobg.pause()
    audiolove.play()
    document.getElementById('modal_body2').style.display = "none";
    document.getElementById('alll').style.display = "flex";
}