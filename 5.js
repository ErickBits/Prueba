let texto = "topo araña topo murcielago topo animales topo cerdo topo mamunt topo leopardo topo leopardo";

function contar(texto, cadena) {
    let contador = 0;
    let indice = 0;

    while ((indice = texto.indexOf(cadena, indice)) !== -1 ) {
        ++contador;

        indice += cadena.length; 
    }

    return contador;

}

console.log(contar(texto, 'topo'));