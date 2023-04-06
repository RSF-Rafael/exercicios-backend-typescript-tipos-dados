const imprimirTabuada = (numeros: number[]) => {

    numeros.forEach(numero => {
        for (let i: number = 0; i <= 10; i++) {
            const multiplicador: number = i;
            const resultado: number = numero * i;
            console.log(`${numero} x ${i} = ${resultado}`);
        }
        console.log("---------------");
    });
}

// imprimirTabuada([5, 7]);

//resolução do professor

const tabuada = (numeros: number[]): string => {
    let resultado: string = '';

    for (const n of numeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${n} x ${i} = ${n * i} \n`;
        }
        resultado += `-------------- \n`
    }


    return resultado;
}

console.log(tabuada([1, 5, 7]));
