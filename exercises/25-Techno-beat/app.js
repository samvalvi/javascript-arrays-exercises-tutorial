const lyricsGenerator = arr => {
    let lyric = '';
    let contadorUno = 0;

    for(let i = 0; i < arr.length; i++){
        if( arr[i] === 0) lyric += 'Boom' + ' '
        if(arr[i] === 1){
            contadorUno++;
            if(contadorUno === 3){
                lyric += 'Drop the base' + ' ' + '¡¡¡Break the base!!!'
            }else{
                lyric += 'Drop the base' + ' '
            }
        }
    }

    return lyric.toString();
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))