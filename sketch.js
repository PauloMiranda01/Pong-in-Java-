//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 24;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;
let raqueteComprimento = 7
let raqueteAltura = 100;

//variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;

//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

//variavéis do oponente
let xRaqueteOponente = 583;
let yRaqueteOponente = 150;
let velocidadeYOPonente;


  
//Sons do Jogo
 let Raquetada;
 let ponto;
 let trilha;
  
 function preload(){
 Raquetada = loadSound("Raquetada.mp3"); 
 ponto = loadSound("ponto.mp3");
 trilha = loadSound("trilha.mp3"); 
 
 }
 
//Chance de Erro do Oponente 
 let chanceDeErrar = 0;
  


 //Setup Do jogo
 function setup() {
 createCanvas(600,400);
 trilha.loop();
  
  

 
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  bolinhaNaoFicaPresa();
  
  
 
 } 
 
 function mostraBolinha () { 
   circle (xBolinha , yBolinha , diametro)
    }
    
  function movimentaBolinha () {
  xBolinha += velocidadeXBolinha;  
  yBolinha += velocidadeYBolinha;
  }
   
  function verificaColisaoBorda () {
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
  velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || 
     yBolinha - raio < 0)
    velocidadeYBolinha *= -1
  }

  function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
  }

  function movimentaMinhaRaquete(){
   if(keyIsDown(UP_ARROW)){
     yRaquete-=10;
   }
     if(keyIsDown(DOWN_ARROW)){
     yRaquete+=10;
   }
  }

   function verificaColisaoRaquete(){
     if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
     velocidadeXBolinha *= -1;
       Raquetada.play();
       
       
     }
} 

    function verificaColisaoRaquete(x,y){
 colidiu =   
      collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);  
      if (colidiu){
      velocidadeXBolinha *= -1;
        Raquetada.play();
      }
    }

   function movimentaRaqueteOponente(){
   velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento /2 -30;
   yRaqueteOponente += velocidadeYOponente + chanceDeErrar 
     calculaChanceDeErrar()
   }
 
   function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 35){
    chanceDeErrar = 45
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 40
    }
  }
}
   
   function incluiPlacar(){
     stroke(255);
     textSize(16);
     textAlign(CENTER)
     fill(color((79,79,79)));
     rect(150, 10, 40, 20)
     fill (255)
     text(meusPontos, 170, 26);  
     fill(color((79,79,79))); 
     rect(450, 10, 40, 20)
     fill(255);
     text(pontosDoOponente,470, 26);
   }
 
function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    xBolinha = 300;
    }
}

   function marcaPonto(){
      if(xBolinha > 590){ 
        meusPontos +=1;
        ponto.play();
      }
     
     if (xBolinha < 10){
        pontosDoOponente +=1;
        ponto.play();
     }
     
  }
