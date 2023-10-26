let slides = new Array('battlefield.jpg','cs.png','eldenring.jpg','genshin.jpg','gow.jpg','lol1.jpg','lor.jpeg','mine.png','outlast.png','raibowsix.png','stardewvalley.jpg','subnautica.jpg','terraria.jpg','thesims.jpg','warzone.jpg','fort.jpg')
let tam = slides.length
let satual = 0
let tmpslider

//iniciar troca
function iniciaSlider(){
  tmpslider = setInterval(trocaAutomatica, 180)
}
//troca de slide auto
function trocaAutomatica(){
  satual++
    if (satual < tam){
      document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[satual]}')`
    }
    if (satual > tam){
      satual = 0
    }
}
//para a troca de slide
function parar(){
  clearInterval(tmpslider)
}