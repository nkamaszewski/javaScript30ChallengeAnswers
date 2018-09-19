Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
}

const allAudios = document.querySelectorAll('audio');

window.addEventListener('keydown', (e) => {
    const code = e.keyCode;
    const div = document.querySelector(`div[data-key='${code}']`);
    const audio = document.querySelector(`audio[data-key='${code}']`);
    if (div && audio) {
        allAudios.forEach((audio) => {
            audio.stop();
        })
        div.classList.add('playing');
        audio.play();
    }
});

window.addEventListener('keyup', (e) => {
    const code = e.keyCode;
    const div = document.querySelector(`div[data-key='${code}']`);
    if (div) {
        div.classList.remove('playing');
    }
});