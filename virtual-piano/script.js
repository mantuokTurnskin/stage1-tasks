const COLLECTION = document.querySelectorAll('.piano-key');
const PIANO = document.querySelector('.piano')
const FULLSCREEN = document.querySelector('.fullscreen');
const BTN_NOTES = document.querySelector('.btn.btn-notes');
const BTN_LETTERS = document.querySelector('.btn.btn-letters');
const PK_BEFORE = document.querySelector('.piano-key::before');
const PK_AFTER = document.querySelector('.piano-key::after');

const startSound = (e) => {
    let key = e.target;
    key.classList.add('piano-key-active');
    let note = document.getElementById(key.dataset.note);
    note.currentTime = 0;
    note.play();
    note.addEventListener('ended', () => key.classList.remove('piano-key-active'));
}
const stopSound = (e) => {
    let key = e.target;
    key.classList.remove('piano-key-active');
}

PIANO.addEventListener('mousedown', startSound, false);
PIANO.addEventListener('mouseup', stopSound);

FULLSCREEN.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
});

BTN_NOTES.addEventListener('click', () =>{
    BTN_LETTERS.classList.remove('btn-active');
    BTN_NOTES.classList.add('btn-active');
    PK_BEFORE.style.content = 'attr(data-note)';
    PK_AFTER.style.content = 'data-letter';
})

BTN_LETTERS.addEventListener('click', () =>{
    BTN_LETTERS.classList.add('btn-active');
    BTN_NOTES.classList.remove('btn-active');
    PK_AFTER.style.content = 'attr(data-note)';
    PK_BEFORE.style.content = 'data-letter';
})
