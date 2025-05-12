import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from 'chalk';

const rl = readline.createInterface({input, output});

function validProductCode(productCode){
    return /^[a-zA-Z0-9]+$/.test(productCode);
}

async function productRegistration () {

    const productName = await rl.question('Įveskite produkto pavadinimą: ');
    const category = await rl.question('Įveskite produkto kategoriją: ');
    const price = await rl.question('Įveskite produkto kainą: ');
    const productCode = await rl.question('Įveskite prekės kodą: ');
    const description = await rl.question('Įveskite aprašymą: ');

    if(!productName || !category || !price || !productCode){
        console.log(chalk.yellow('Negauti visi produkto duomenys.'));
        rl.close();
        return;
    }

    if(productName.length < 3 || productName.length > 100){
        console.log(chalk.red('Produkto pavadinimas privalo būti nuo 3 iki 200 simbolių ilgio.'));
        rl.close();
        return;
    }

    const numericPrice = parseFloat(price);

    if(isNaN(numericPrice) || numericPrice <= 0){
        console.log(chalk.red('Produkto kaina turi būti teigiamas skaičius'));
        rl.close();
        return;
    }

    if(productCode.length < 5 || productCode.length > 20 || !validProductCode){
        console.log(chalk.red('Prekės kodas Prekės kodas turi būti tik raidės ir skaičiai, tarp 5 ir 20 simbolių.'));
        rl.close();
        return;
    }

    if(description && description.length <= 500){
        console.log(chalk.red('Produkto aprašymas turi būti ne ilgesnis nei 500 simbolių.'));
        rl.close();
        return;
    }

    console.log(chalk.green('Produktas sėkmingai užregistruotas sistemoje.'));
    rl.close();
}

productRegistration();