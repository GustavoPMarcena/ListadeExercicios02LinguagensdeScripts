let buttom = document.getElementById("buttonQ2");
let div = document.querySelector("#DivQ2");
let input = document.getElementById("inputTarefa");


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addTarefa();
    }
  
});

buttom.addEventListener("click", () => {
    addTarefa();
});

function addTarefa(){
    let content = document.getElementById("inputTarefa").value;

    const newTask = document.createElement("div");
    newTask.innerHTML = `<div class="taskDivs">
                            <p>${content}</p>
                            <button onclick="deleteTask(this)" >X</button>
                         </div>`;

    div.appendChild(newTask);

    document.getElementById("inputTarefa").value = "";
}

function deleteTask(element) {
    const parent = element.closest("div");
    parent.remove();
}