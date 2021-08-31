var mVideo = document.getElementById("playerCustomized");

//Função play/pause

function playPause() {
    if (mVideo.paused) {
        mVideo.play();
    } else {
        mVideo.pause();
    }

}

//Função ampliar

function ampliar() {
    mVideo.width = 600;

}

//Função reduzir

function reduzir() {
    mVideo.width = 300;


}

 //Função tamanhoNormaol

function tamanhoNormal() {
    mVideo.width = 430;


}


 //Função tela cheia

function telaCheia() {
    mVideo.requestFullscreen();


}

//Função volume+

function aumentarVolume() {
    mVideo.volume += 0.1;


}

 //Função volume-

function diminuirVolume() {
    mVideo.volume -= 0.1;


}

 //Função mute

function mute() {
    mVideo.muted = true;



  } 
 
