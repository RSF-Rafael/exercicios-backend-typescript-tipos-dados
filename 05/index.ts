const soletrarPalavra = (palavra: string): string => {
    let resultado: string = '';
    for (let i: number = 0; i < palavra.length; i++) {
        if (i < palavra.length - 1)
            resultado += `${palavra[i]}-`;
        else resultado += `${palavra[i]}`;
    }

    return resultado;
}

// console.log(soletrarPalavra('programador'));

//simplificando com métodos

const soletrar = (texto: string): string => {
    return texto.split('').join('-');
}

console.log(soletrar('Rafael'));