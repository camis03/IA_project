const nomes =["Fernanda","Giuliana","Maria Eduarda","marcelo","Amanda","Gustavo","Gabriel"]

function aleatorio (lista){
    const posicao = math.floor(math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);