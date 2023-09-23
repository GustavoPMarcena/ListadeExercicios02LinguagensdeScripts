const ulQ4 = document.getElementById("ulQ4");
const button = document.getElementById("buttonQ4");

let employeObjectArray = [];

button.addEventListener("click", () => {
    const inputNome = document.getElementById("inputNome").value;
    const inputSalario = document.getElementById("inputSalario").value;

    adicionarFuncionario(inputNome, inputSalario);
    console.log(employeObjectArray);
    adicionarArrayTela();

    let maior = localizarMaiorSalario();
    let soma = totalSalarios();
    adicionarMaioreSoma(maior, soma);

    document.getElementById("inputNome").value = "";
    document.getElementById("inputSalario").value = "";
});

function adicionarFuncionario(nome, salario){
    employeObjectArray.push({
        Nome:nome,
        Salario:salario
    })
}

function adicionarArrayTela() {
    const paragrafo = document.createElement("li");
    let listaFormatada = employeObjectArray.map(element => `${element.Nome}: R$ ${element.Salario}`).join('; ');
    paragrafo.textContent = listaFormatada;
    ulQ4.innerHTML = '';
    ulQ4.appendChild(paragrafo);
}

function localizarMaiorSalario() {
    const result = employeObjectArray.reduce((acumulator, current) => {
        if (current.Salario > acumulator[1]) {
            return [current.Nome, current.Salario];
        } else {
            return acumulator;
        }
    }, [employeObjectArray[0].Nome, employeObjectArray[0].Salario]);

    return result;
}

function totalSalarios(){
    return employeObjectArray.reduce((acumulator, current) => acumulator += parseFloat(current.Salario), 0);
}

function adicionarMaioreSoma(list, soma){
    const p1 = document.createElement("li");
    const p2 = document.createElement("li");
    p1.textContent = `O funcionário com maior salário é ${list[0]}, com R$ ${list[1]}`;
    p2.textContent = `A soma de todos os salários é R$ ${soma}`;
    ulQ4.appendChild(p1);
    ulQ4.appendChild(p2);

}