function start () { // inicio da função start()
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1' ></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div)");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
} //fim da função start

//principais variaveis do jogo

var jogo = {};
var velocidade = 5;
var posicaoY = parseInt(Math.random() * 334);
var TECLA = {
    W: 38,
    S: 40,
    D: 9
}

jogo.pressionou = [];

// verifica se o usuario usou alguma tecla
$(document).keydown(function(e){
    jogo.pressionou[e.which] = true;
})

$(document).keyup(function(e){
    jogo.pressionou[e.which] = false;
});


//game loop

jogo.timer = setInterval(loop, 30);
function loop () {
    moveFundo();
    moveJogador();
    moveInimigo1();
    moveInimigo2();
    moveAmigo();
   
} // fim da função loop

//função que movimenta o fundo do jogo

function moveFundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda-1);

} //fim da função move fundo

function moveJogador() { //function move jogador
    if(jogo.pressionou[TECLA.W]) { // tecla me move o jogador para cima
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo-10)

        if(topo <=0 ) {
            $("#jogador").css("top",topo+10)
        }
    } // fim da função move jogador

    if(jogo.pressionou[TECLA.S]) { //tecla que move o jogador para baixo
        var topo = parseInt($("#jogador").css("top"));
        $("#jogador").css("top",topo+10);

        if(topo >= 434) {
            $("#jogador").css("top",topo-10)
        }
    }

    if(jogo.pressionou[TECLA.D]) { //tecla que chama a funçao disparo
   
    }
}


function moveInimigo1() { //função move inimigo1
    posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left", posicaoX-velocidade);
    $("#inimigo1").css("top",posicaoY);

    if(posicaoX <= 0) {
        posicaoY = parseInt(Math.random() * 334);
        $("#inimigo1").css("left", 694);
        $("#inimigo1").css("top", posicaoY);
    } 
} //fim da função move inimigo 1

function moveInimigo2() {
    posicaoX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left", posicaoX-3);
    
        if(posicaoX <= 0){        
         $("#inimigo2").css("left", 775);  
    }
} // fim da funçao move inimigo 2

function moveAmigo () {
    posicaoX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left", posicaoX+1);

    if(posicaoX > 906) {
        $("#amigo").css("left", 0)
    }
}