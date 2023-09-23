let buttom = document.getElementById("buttonQ1");
let div = document.querySelector("#DivQ1");

buttom.addEventListener("click", ()=>{
    let numbersArray = document.getElementById("inputNumeros").value;
    let separador = document.getElementById("inputSeparador").value;

    numbersArray = numbersArray.split(separador);
    numbersArray = numbersArray.map(str => parseInt(str.trim(), 10));
    
    let maiorNum = numbersArray[0];
    let menorNum = numbersArray[0];

    numbersArray.forEach(element => {
        if(element > maiorNum) maiorNum = element;
        if(element < menorNum) menorNum = element;
    });
    console.log(numbersArray);
    console.log(maiorNum, menorNum);

    const p = document.createElement("p");
    p.textContent = `Maior Número: ${maiorNum}, \nMenor Número: ${menorNum}`;
    div.appendChild(p);

    document.getElementById("inputNumeros").value = "";
    document.getElementById("inputSeparador").value = "";
});