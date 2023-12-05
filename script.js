document.addEventListener("DOMContentLoaded", function () {
    // Gerar vetores u e v com três coordenadas
    const u = gerarVetor();
    const v = gerarVetor();

    // Gerar números reais a e b
    const a = gerarNumeroReal();
    const b = gerarNumeroReal();

    // Calcular o vetor w = au + bv
    const w = calcularVetor(u, v, a, b);

    // Exibir resultados
    mostrarResultado(u, v, a, b, w);
});

function gerarVetor() {
    return [numeroAleatorio(), numeroAleatorio(), numeroAleatorio()];
}

    //Gera Número aleatório de 0 a 9, sempre arredondando para baixo.
function numeroAleatorio() {
    return Math.floor(Math.random() * 10);
}

function gerarNumeroReal() {
    return Math.random() * 10;
}

function calcularVetor(u, v, a, b) {
    const w = [];
    for (let i = 0; i < u.length; i++) {
        w[i] = a * u[i] + b * v[i];
    }
    return w;
}

function produtoVetorial(u, v) {
    const w = [
        u[1] * v[2] - u[2] * v[1],
        u[2] * v[0] - u[0] * v[2],
        u[0] * v[1] - u[1] * v[0]
    ];
    return w;
}

function mostrarResultado(u, v, a, b, w) {
    const mostrarDiv = document.getElementById("mostrar");

    // Exibir vetores u, v e w
    mostrarDiv.innerHTML += `<p>Vetor u: [${u.join(', ')}]</p>`;
    mostrarDiv.innerHTML += `<p>Vetor v: [${v.join(', ')}]</p>`;
    mostrarDiv.innerHTML += `<p>Números reais a e b: ${a}, ${b}</p>`;
    mostrarDiv.innerHTML += `<p>Vetor w (au + bv): [${w.join(', ')}]</p>`;

    // Calcular e exibir o produto vetorial entre u e v
    const pv = produtoVetorial(u, v);
    mostrarDiv.innerHTML += `<p>Produto Vetorial (u x v): [${pv.join(', ')}]</p>`;
}
