
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';



const onPlay = function (e) {
    localStorage.setItem(STORAGE_TIME_KEY, e.seconds);
  };

player.on("timeupdate", throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_TIME_KEY))||0);




