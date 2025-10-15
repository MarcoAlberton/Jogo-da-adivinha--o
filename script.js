// Variavéis que geram um numero aleatório e define o número de tentativas
let numeroAleatorio = Math.floor(Math.random() * 101);
let tentativas = 5;

function chuteNumero(){
    // Variavéis criadas para capturar os valores inseridos pelo úsuario e exibir mensagens através do HMTL
    let chute = Number(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");
    let dicas = document.getElementById("dicas");

    if(tentativas > 0){
        if(chute === numeroAleatorio){ // Bloco de código condicional para quando o úsuario acertar o resultado
            mensagem.textContent = `Você acertou parabéns! O numero era ${numeroAleatorio}.`;
            dicas.textContent = "";
            tentativas = 0;
          } else {
            tentativas--;
            if(tentativas>0){
                mensagem.textContent = `Você errou! Restam: ${tentativas} tentativas.`; // Bloco condicional para quando o úsuario errar, informar que o número está incorreto e exibir quantas tentativas restam
                if (chute > numeroAleatorio){
                dicas.textContent = " O número sorteado é menor! "; // Bloco condicional que exibe uma dica caso o chute do úsuario seja maior que o numero sorteado
                } else{
                dicas.textContent = " O número sorteado é maior"; // Exibe uma dica informando que o chute foi menor que o número sorteado
              }
            }     else {
                    mensagem.textContent = `Fim de jogo! O número era ${numeroAleatorio}`
                    dicas.textContent = "" // Bloco de código para quando as tentativas zerarem, exibindo que o jogo finalizou e exibindo o número sorteado

            }
        }

    }
}



    


    





