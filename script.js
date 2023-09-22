window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = '${e.code}']`);
    const key = document.querySelector(`.key[data-key = '${e.code}']`);
    if (!audio) return; // If the key pressed doesn't correspond to the keys in the drum kit the operation is terminated 
    audio.currentTime = 0; //rewinds to the start allowing the concurrent playing of the audio
    audio.play(); //plays the audio associated with the key pressed
    key.classList.add('playing') // adds a new class to the keys that adds styling once the keys are pressed.. Refer to the css doc
});


// This function removes the 'playing' class from the keys once the transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //This skips over any key that has not been pressed

    this.classList.remove('playing'); // Removes the class 'playing' from the keys once the transition ends
}

const keys = document.querySelectorAll('.key') //This selects all the keys and stores them in the variable keys

keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //This calls the removeTransition for each key stored in the keys variable