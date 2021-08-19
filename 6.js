function palindromo(texto) {
    return texto.split("").reverse().join("") == texto;
}

console.log(palindromo("Alli va Ramon yno maravilla")); //le debe retornar true puesto que es palindromo
console.log(palindromo("toro")); //le debe retornar false puesto que no es palindromo