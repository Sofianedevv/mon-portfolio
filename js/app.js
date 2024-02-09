const txtAnim = document.querySelector('h1'); 

new Typewriter(txtAnim, {
    // deleteSpeed: 100
} )
.changeDelay(60)
.typeString('Moi c\'est Sofiane Chadili <br>')
.pauseFor(300)
.typeString('<small> Je suis développeur web fullstack !</small>')




.start()

