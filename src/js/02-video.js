
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';

player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem(STORAGE_TIME_KEY, e.seconds);
  }
player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_TIME_KEY))||0);




