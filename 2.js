function num_mayor(num_str) {
    if (toString.call(num_str) !== '[object Array]'){
        return null;
    }

    if (!num_str.every(numero => typeof numero == 'number')) {
        console.log('tienen que ser numeros');
    }

    return Math.max.apply(null, numeros);

}

console.log(num_mayor([4,35,32,56,3,8,67]));