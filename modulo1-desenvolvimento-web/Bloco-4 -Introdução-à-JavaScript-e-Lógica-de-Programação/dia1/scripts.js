peca = "REI"

switch(peca.toLowerCase()) {
    case "torre" :
        console.log("A torre movimenta-se em direção reta pelas colunas ou fileiras.")
        break;
    case "cavalo" :
        console.log("O cavalo movimenta-se sempre em L,ou seja,duas casas para frente e uma para a esquerda ou direita. O cavalo é a única peça que pode pular sobre as outras, tanto as suas quanto as adversárias.");
        break;
    case "bispo" :
        console.log("O bispo move-se na diagonal, quantas casas quiser.");
        break;
    case "rainha" :
        console.log("A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
        break;
    case "rei" :
        console.log("O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.");
        break;
    case "peao" :
        console.log("De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas.");
        break;
    default:
        console.log("Insira uma peca valida");
}
