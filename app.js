// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

let sorteados = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "" || !isNaN(nome)) {
    alert("Por favor, escriba un nombre valido.");
    return;
  }

  amigos.push(nome);
  actualizarLista();

  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  (lista.innerHTML = ""),
    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo + (index < amigos.lenght - 1 ? "," : "");
      lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (amigos.lenght === 0) {
    alert("A lista de amigos está vacia.");
    return;
  }

  if (amigos.length <= 2) {
    alert("Para poder realizar el sorteo es necesario agregar tres amigos o mas.");
    return;
  }

  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceSorteado];

  sorteados.push(amigoSorteado);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "El amigo sorteado es: " + sorteados;

  dispararConfete();

  sorteados = [];

  atualizarLista();
}

function dispararConfete() {
  var count = 500;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}
