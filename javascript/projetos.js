/*
*______________________________________________________________________________________________________________________________
*   ___                    ______                 _                          
  |_  |                   |  ___|               (_)                         
    | | ___   __ _  ___   | |_ ___ _ __ _ __ ___ _ _ __ __ _    ___ ___ ___ 
    | |/ _ \ / _` |/ _ \  |  _/ _ \ '__| '__/ _ \ | '__/ _` |  / __/ __/ __|
/\__/ / (_) | (_| | (_) | | ||  __/ |  | | |  __/ | | | (_| | | (__\__ \__ \
\____/ \___/ \__,_|\___/  \_| \___|_|  |_|  \___|_|_|  \__,_|  \___|___/___/
*                                                                            
*                                                                            
* CSS DO PORTIFÓLIO PESSOAL
* © Copyright 2020 Joao Ferreira, fluxuss tecnologia de inovacao ltd
*
* https://github.com/keowu
* https://github.com/Fluxuss-Development
*
* Licensed under MIT License (http://opensource.org/licenses/MIT)
*
*
*______________________________________________________________________________________________________________________________
*/


//OH MY GOOD JAVASCRIPTTTTT
// NO, IS NON-PROGRAMMERSSCRIPT

function mostrarProjetos(){
    var x = document.getElementsByClassName("auterprojeto");
    var y = document.getElementById("extend");
    var i;
    for (i = 0; i < x.length; i++){
        if(x[i].style.display == "block"){
            x[i].style.display = "none"; 
            y.style.display = "block";
            console.log("Projetos escondidos !");
        }else{
            x[i].style.display = "block"; 
            y.style.display = "none";
            console.log("Projetos em exibição !");
        }
    }
}



function mostraRepositorios(){
    var x = document.getElementsByClassName("auterrepo");
    var y = document.getElementById("extend");
    var i;
    for(i=0; i < x.length; i++){
        if(x[i].style.display == "block"){
            x[i].style.display = "none";
            y.style.display = "block";
        }else{
            x[i].style.display = "block";
            y.style.display = "none";
        }
    }
}



function emailBro(){
    var mail = document.getElementById("email_hide");
    mail.innerHTML = atob('am9hb3ZpdG9yZGV2QHByb3Rvbm1haWwuY2g');
    console.log('E-mail Descriptografado');
    //=
}



//FLUXUSS CORP FROM BRAZIL

//_____________________ONLY ONLY LOG LOG FOR SE C U RITY
console.log("%c MENSAGEM DO @KEOWU -> NUNCA COLE NADA AQUI, SE ALGUEM PEDIU TEM GRANDES CHANCES DESSE ELEMENTO TENTAR BURLAR ALGUMA PROTEÇÃO NO SEU COMPUTADOR !",
           'background: #222; color: #bada55; font-size: 25px;');
console.log("%c If you try to reverse this, i get into your life !",
           'background: #222; color: #bada55; font-size: 10px;');


//HI I AM MUFFIN THIS IS MUFFIN HTML

//GOOGLE LIB API MODDED BY @KEOWU, YES JAVASCRIPT.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    var video = ['QH2-TGUlwu4', 'T-fWZy9zh8Y', 'YFMLHCMc91c', 'kS1kCQ_2TCA', 'zVaPTJac8dQ', 'DhHGDOgjie4'];
    var choise = Math.floor(Math.random() * 6)
    id = video[choise];
    console.log("Parabéns seu número da sorte é " + choise + " Será tocado uma música especial para você !");
    
    player = new window['YT'].Player('player', {
        width: '0',
        height: '0',
        position: 'absolute',
        videoId: id,
        playerVars: { 'autoplay': 1, 'loop': 1, 'playsinline': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(100);
    //event.target.playVideo();
    player.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.playVideo();
    }
}

function musicStop(){
    if(player.isMuted()){
        player.unMute();
    }else{
        player.mute();
    }
}
                