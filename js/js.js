function start () { // inicio da função start()
    $("#inicio").hide();

    $("#fundoGame").append("<div id='jogador' class='anima1' ></div>");
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div)");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
} //fim da função start

//principais variaveis do jogo

var jogo = {}

//game loop

jogo.timer = setInterval(loop, 30);
function loop () {
    moveFundo();
} // fim da função loop

//função que movimenta o fundo do jogo

function moveFundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda-1);

} //fim da função move fundo