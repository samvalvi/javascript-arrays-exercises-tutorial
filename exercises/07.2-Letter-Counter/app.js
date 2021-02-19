let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let arrayPar = Array.from(par);

for(let i = 0; i < arrayPar.length; i++){
    let element = arrayPar.filter(ele => ele === arrayPar[i]).length;
        counts[arrayPar[i]] = element;
}

console.log(counts);