function handleClickh() {
    var audioPlayer = document.getElementById("ee");
    audioPlayer.play();
}

function init() {
    console.log("Initializing...");
    var h = document.getElementById("h");
    h.addEventListener("click", handleClickh);
}

document.addEventListener('DOMContentLoaded', init);

const txtAnim = document.querySelector('h5');

new Typewriter(txtAnim, {
    deleteSpeed: 40
})
.changeDelay(40)
.typeString("Hello !")
.pauseFor(300)
.typeString(" Voici mon code <span style='color: #9400D3;'>Github</span> ;)")
.pauseFor(1000)
.deleteChars(24)
.pauseFor(500)
.typeString("Cliquez sur l'<span style='color: #66CDAA;'>image</span> !")
.pauseFor(1000)
.start()

const txtAnim2 = document.querySelector('h6');

new Typewriter(txtAnim2, {
    loop: true,
    deleteSpeed: 40
})
.changeDelay(40)
.typeString(" <span style='color: #A9A9A9'>Logos</span>")
.pauseFor(1000)
.deleteChars(5)
.pauseFor(500)
.typeString(" <span style='color: #ADD8E6'>Boutons</span>")
.pauseFor(1000)
.deleteChars(7)
.pauseFor(500)
.typeString(" <span style='color: #DDA0DD'>Emotes</span>")
.pauseFor(1000)
.start()
