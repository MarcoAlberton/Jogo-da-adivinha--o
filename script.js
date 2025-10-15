let numeroAleatorio = 16;
let tentativas = 5;

function chuteNumero(){
    let chute = Number(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");

    if(tentativas > 0){
        if(chute === numeroAleatorio){
            mensagem.innerHTML = `Você acertou parabéns! O número correto era ${numeroAleatorio}`;
            tentativas = 0;
        } else{
            tentativas--;
        if(tentativas > 0){
            mensagem.innerHTML = `Você errou! Tente novamente. Restam ${tentativas} tentativas.`;
        }   else{
                mensagem.innerHTML = `Fim de jogo! As tentativas zeraram. O número era ${numeroAleatorio}`;
            }
        }
    }
}