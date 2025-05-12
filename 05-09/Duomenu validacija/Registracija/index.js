import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from 'chalk';

const rl = readline.createInterface({input, output});

function isValidEmail(email) {
  // Paprastas el. pašto formatas
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasNumber(str) {
  return /\d/.test(str);
}

async function register() {
    const name = await rl.question('Įveskite vardą: ')
    const surname = await rl.question('Įveskite pavardę: ')
    const email = await rl.question('Įveskite el.pašto adrasą: ')
    const phone = await rl.question('Įveskite telefono numerį: ')
    const password = await rl.question('Įveskite slaptažodį: ')

    if(!name || !surname || !email || !phone || !password){
        console.log(chalk.yellow('Negauti registracijos duomenys'));
        rl.close();
        return;
    }

    if(name.length < 3 || name.length > 200){
        console.log(chalk.red('Vardas privalo būti nuo 3 iki 200 simbolių ilgio.'));
        rl.close();
        return;
    }

    if(surname.length < 3 || surname.length > 200){
        console.log(chalk.red('Pavardė privalo būti nuo 3 iki 200 simbolių ilgio.'));
        rl.close();
        return;
    }

    if(email < 5 || email > 50 || !isValidEmail(email)){
        console.log(chalk.red('El.pašto adresas turi būti 5-50 simbolių ir teisingo formato.'));
        rl.close();
        return;
    }

    if(password < 8 || password > 16 || !hasNumber(password)){
        console.log(chalk.red('Slaptažodyje turi būti bent vienas skaičius ir 8-16 simbolių ilgis.'));
        rl.close();
        return;
    }

    console.log(chalk.green('Sveikiname sėkmingai prisiregistravus platformoje!'));
    rl.close();
    
}

register();