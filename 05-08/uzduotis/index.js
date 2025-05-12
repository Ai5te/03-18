console.log('Veikia');

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

let dydis = 25;
let rezultatas = '';

    for(let i = 1; i <= dydis * dydis; i++) {
        if(i % dydis === 0) {
            rezultatas += '*\n';
        } else {
            rezultatas += '* ';
        }
    }

    console.log(rezultatas);

    dydis = 7;
    rezultatas = '';

    for(let i = 0; i < dydis; i++){

        for(let x = 0; x < dydis; x++){
            if(i === x || x === dydis - i - 1){
                rezultatas += chalk.red('* ');
            }else {
                rezultatas += '* '
            }
        }
        rezultatas += '\n'
    }

    console.log(rezultatas);
    
