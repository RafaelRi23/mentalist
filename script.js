function guessTheNumber () {
    var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
    var tentativa = 1
    
    while ((chute != numeroSecreto)&&(tentativa !=11)) {
      var chute = prompt(`${tentativa}ª tentativa \n Digite um número entre 1 e 1000`)
      if (chute == numeroSecreto) {
        alert('Acertou!')
      } else if (chute > numeroSecreto) {
        alert('Errou! O número é menor do que ' + chute) 
      } else if (chute < numeroSecreto) {
        alert('Errou! O número é maior do que ' + chute) 
      }
        tentativa++
       
      if (tentativa == 11) {
        alert('Acabou! O número secreto era ' + numeroSecreto)
      }
    }
  }