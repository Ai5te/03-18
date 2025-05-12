//Matrica

    // dydis = process.stdout.columns
    // let eilute = "";

    // for(let x = 0; x < dydis; x++){
    //     eilute += chalk.green('*');

    // }

    // console.log(eilute);
    
    // setInterval( () => {
    //     let eilute = "";
    //     let dydis = process.stdout.columns

    //     for(let i = 0; i < dydis; i++){
    //         if(i % 8 === 0) {
    //             eilute += chalk.white('* ');
    //         } else {
    //             eilute += chalk.green('* ');
    //         }
    //     }
    //     console.log(eilute);
        
    // }, 500)


    // setInterval(() => {
    //     let eilute = '';
    //     const ilgis = process.stdout.columns;
      
    //     for (let i = 0; i < ilgis; i++) {
    //       // Tikimybė, kad simbolis bus baltas – 1 iš 10
    //       const isWhite = Math.random() < 0.1;
    //       eilute += isWhite ? chalk.white('*') : chalk.green('*');
    //     }
      
    //     console.log(eilute);
    //   }, 500);

//     import chalk from 'chalk';

//     const cols = process.stdout.columns;
//     const rows = process.stdout.rows;

//     const characters = 'アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン'.split('');

//     const rainDrops = Array(cols).fill(0);

//     setInterval(() => {
//         let output = '';

//     for (let i = 0; i < cols; i++) {

//         const randomchar = characters[Math.floor(Math.random() * characters.length)];

//         if (Math.random() > 0.975) {
//             output += '\n';
//         }    

//         output += chalk.green(char);

//         rainDrops[i]++;
//         if (rainDrops[i] > rows || Math.random() > 0.95) {
//             rainDrops[i] = 0;
//         }
//     }

//     process.stdout.write(output);  

// }, 400);

function random(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

import chalk from 'chalk';

// const cols = process.stdout.columns; // Kiek stulpelių ekrane
// const rows = process.stdout.rows; // Kiek eilučių ekrane

// // Katakana simboliai
// const characters = 'アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン'.split('');

// // Naudojame masyvą, kad stebėtume "lietus" ir atsitiktinį krentančių simbolių pasirinkimą
// const rainDrops = Array(cols).fill(0);

// setInterval(() => {
//     let output = '';

//     // Kiekvienam stulpeliui
//     for (let i = 0; i < cols; i++) {
//         const randomChar = characters[Math.floor(Math.random() * characters.length)];

//         // Atsitiktinis sprendimas, kad kai kuriuose stulpeliuose būtų tarpai
//         const randomSpaceChance = Math.random();
//         let charToShow = ' '; // Numatytoji reikšmė - tarpas
//         if (randomSpaceChance > 0.5) { // 20% tikimybė, kad bus simbolis
//             charToShow = randomChar;
//         }

//         // Atsitiktiniai tarpai ir simbolių atsiradimas tik kai kur
//         const randomDropChance = Math.random();
//         const randomSpacing = Math.random(); // Atsitiktinis sprendimas, kaip dažnai atsiranda tarpai

//         if (randomDropChance > 0.4) { // 60% tikimybė rodyti simbolį
//             output += chalk.green(charToShow);
//         } else {
//             output += ' '; // Kitaip rodome tarpus
//         }

//         // Lietaus kritimo efekto logika: kai pasiekia eilutės galą arba atsiranda atsitiktinis pertraukimas, pradeda nuo viršaus
//         rainDrops[i]++;
//         if (rainDrops[i] > rows || Math.random() > 0.95) {
//             rainDrops[i] = 0;
//         }
//     }

//     // Išvalome ekraną ir perrašome vertikaliai
//     // console.clear();
//     process.stdout.write(output);

// }, 100);

const cols = process.stdout.columns;
const rows = process.stdout.rows;

const characters = 'アァイィウヴエカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲン'.split('');

const rainDrops = Array(cols).fill(0);

setInterval(() => {

    let output = '';
    
    for(let i = 0; i < cols; i++){
        const randomChar = characters[random(0, characters.length - 1)];

        const randomSpaceChance = random(0, 100) / 100;

        let charToShow = randomChar;

        if(randomSpaceChance > 0.5){
            charToShow = ' ';
        }

        const randomDropChance = random(0, 100) / 100;

        if(randomDropChance > 0.4){
            output += chalk.green(charToShow);
        }else {
            output += ' ';
        }

        rainDrops[i]++;
        if(rainDrops[i] > rows || random(0, 100) / 100 > 0.95){
            rainDrops[i] = 0;
        }
    }

    process.stdout.write(output);
 
}, 200);


