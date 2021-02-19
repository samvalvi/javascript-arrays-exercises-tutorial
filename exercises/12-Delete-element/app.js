var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{  
    //your code here
    let newArray = [];
    people.forEach(element => {
        if(element !== personName) newArray.push(element);
    });

    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));