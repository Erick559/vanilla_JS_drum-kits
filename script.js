window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = '${e.code}']`);
    if (!audio) return; // If there key pressed doesn't correspond to the keys in the drum kit the opertaton is terminated 
    audio.currentTime = 0; //rewinds to the start allowing the concurrent playing of the audio
    audio.play(); //plays the audio associated with the key pressed
});