// Code goes here
const matrixBuilder = num => {
    let matrix = [];
    
    matrix = Array.from({length: 3}, () => Array.from({length: 3}, () => Math.floor(Math.random() * 2)));

    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))