// const rows = 3;
// const cols = 3;
// const matrix = [];

// for (let i = 0; i < rows; i++){
//     const row = [];
//     for(let j = 0; j < cols; j++){
//         row.push(Math.floor(Math.random() * 9) + 1);
//     }
//     matrix.push(row);
// }

function generateMatrix(rows, cols){
    const matrix = [];

    for (let i = 0; i < rows; i++){
        const row = [];
        for(let j = 0; j < cols; j++){
            row.push(Math.floor(Math.random() * 9) + 1);
        }
        matrix.push(row);
    }

    return matrix;
}

export { generateMatrix };