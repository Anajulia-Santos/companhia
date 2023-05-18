var readline = require('readline-sync');


do {
    console.log(".__________Passagens Áreas______________.");
    console.log("|                                               |");
    console.log("|        1 - COMPRAR PASSAGEM           |");
    console.log("|              2 - CONSULTAR VOOS               |");
    console.log("|              3 - MAPA DE ASSENTOS             |");
    console.log("|              4 - EMITIR TICKET                |");
    console.log("|              0 - ENCERRAR O PROGRAMA          |");
    console.log("|_______________________________________________|");

    var opcao = readline.question('Digite uma opção')
    opcao = parseInt(opcao)
    switch (opcao) {
        case 1:
            console.log('.______________Passagens Áreas______________.');
            console.log(' ______Você está em -> Comprar Passagem_____');
            console.log('');
            var nome = readline.question('Nome: ');
            // nome = parseInt(nome)
            var sobrenome = readline.question('Sobrenome: ');
            // sobrenome = parseInt(nome)
            var idade = readline.question('Idade: ');
            var assento = readline.question('Assento: ');
            // assento = parseInt(assento)
            var origem = readline.question('Origem: ');
            var destino = readline.question('Destino: ');
            break;
        case 2:
            console.log('.______________Passagens Áreas______________.');
            console.log(' _______Você está em -> Consulta de Voos_______');
            console.log('           Origem       x       Destino            ');
            console.log('________________________________________________________');
            console.log('Presidente Prudente - SP             Guarapari - ES');
            console.log('Presidente Prudente - SP             Porto Seguro - BA');
            console.log('Presidente Prudente - SP             São Paulo - SP');
            console.log('Presidente Prudente - SP             Lisboa');
            console.log('________________________________________________________');
            break;
        case 3:
            var filaA = ('')
            var filaB = ('')
            var i = ('')
            var auxA
            var auxB
            console.log('.______________Passagens Áreas______________.');
            console.log(' ______Você está em -> Mapa de Assentos_____');
            console.log('__________________________________________');

            for (i = 1; i <= 12; i++) {
                var auxA = ('A' + i)
                if (assento == auxA) {
                    filaA = filaA + " X ";
                } else {
                    filaA = filaA + auxA + " ";
                }
                var auxB = ('B' + i)
                if (assento == auxB) {
                    filaB = filaB + " X ";
                } else {
                    filaB = filaB + " " + auxB;
                }
            }


            console.log(filaA);
            console.log(filaB);
            console.log('__________________________________________');
            break;
        case 4:
            console.log('.______________Passagens Áreas______________.');
            console.log(' _______Você está em -> Emitir Ticket_______');
            console.log('');
            console.log('************************************************');
            console.log('*         Cliente ->' + nome + ' ' + sobrenome + '        *');
            console.log('*         Idade ->' + idade + '                      *');
            console.log('*                                              *');
            console.log('*                                              *');
            console.log('*                                              *');
            console.log('*                                              *');
            console.log('************************************************');
            break;

        default:
            break;
    }
} while (opcao != 0);

console.log('Saindo....')
console.log('........')
console.log('................')
console.log('........................')







