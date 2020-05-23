
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

//HI I AM MUFFIN THIS IS MUFFIN HTML

//GOOGLE LIB API MODDED BY @KEOWU, YES JAVASCRIPT.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    var video = ['VyyV8q_WtY0'];
    id = video[0];
    
    player = new window['YT'].Player('player', {
        width: '100%',
        height: '100%',
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