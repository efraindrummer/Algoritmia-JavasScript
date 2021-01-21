//multiplicar 2 variables sin usar el signo de multiplicacion

const multiply = (a, b) => {
    let resultado = 0;
    
    const positivo = Math.abs(b) == b;

    for(i=0; i<Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado - a
    }

    return resultado;
}

const a = multiply(50, 50);
console.log(a);

//obtener el numero mayor de un arreglo iterando el arreglo solo una vez
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el);
const b = getBiggest([50, 56, -986, -65]);
console.log(b);

//iterando el arreglo solo una vez eliminando lo undefined, los 0, los 1 y los nulls
const clean = (arr) => arr.reduce((acc, el) => {
    if(el){
        acc.push(el)
    }
    return acc;
}, []);

const c = clean ([1, undefined, null, 0, 2, 3]);
console.log(c);

//escribir una funcion que aplane el arreglo en un nivel
const arr = [[1,2], [[3,4]], [1, []]];

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), []);
const d = flatten(arr);
console.log(d);

//funcion que muestre la cantidad de veces que se repite una palabra
const repeated = str => {
    const lowered = str.toLowerCase();
    const splitted = lowered.split(' ');
    const reduced = splitted.reduce((acc, el) => {
        if(acc[el]){
            acc[el]++
        }else{
            acc[el] = 1
        }
        return acc
    }, {}); 
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el);
}

const e = repeated('Esto es la veces que se repite una palabra aveces no se que onda aj aj a a');
console.log(e);

//verificar si un string es un palidromo
const isPalidrome = (str) => {
    str = str.replace(/\s/g, '');
    const lowered = str.toLowerCase();
    const splitted = lowered.split('');
    const reversed = splitted.reverse();
    const joined = reversed.join('');

    return lowered == joined 
}

const f = isPalidrome('Sé verlas al revés');
console.log(f)