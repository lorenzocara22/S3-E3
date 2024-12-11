

let inputTask = document.getElementById('input-task');
let bottoneAggiungi = document.getElementById('bottone-aggiungi');
let listaTask = document.getElementById('lista-task');

function aggiungiTask() {
  let testoTask = inputTask.value;
  console.log(testoTask);

  if (testoTask !== "") {
    console.log("Aggiungo task");

    let li = document.createElement('li');
    li.textContent = testoTask;

    let bottoneElimina = document.createElement('button');
    bottoneElimina.textContent = 'Elimina';
    bottoneElimina.classList.add('bottone-elimina');

    bottoneElimina.onclick = function() {
      console.log("Elimino task");
      listaTask.removeChild(li);
    };

    li.appendChild(bottoneElimina);
    listaTask.appendChild(li);
    console.log("Task aggiunto");

    li.onclick = function() {
      li.classList.toggle('completato');
      console.log("Task completato?");
    };

    inputTask.value = "";
    console.log("Input vuoto");
  } else {
    console.log("Nessun task");
  }
}

bottoneAggiungi.onclick = aggiungiTask;

inputTask.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    console.log("Premuto Enter");
    aggiungiTask();  
  }
});