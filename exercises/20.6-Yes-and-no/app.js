let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
const myFunction = element => {
    if(element === 1) return 'wiki'
    if(element == 0) return 'woko'
}

let newArray = theBools.map(myFunction);
console.log(newArray);