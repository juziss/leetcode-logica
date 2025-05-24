const frm = document.querySelector("form");
const modelo = document.querySelector("h2");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.querySelector("#inModelo").value;
  const preco = Number(document.querySelector("#inPreco").value);

  const entrada = preco / 2;
  const saldo = (preco - entrada) / 12;

  modelo.innerText = nome;
  resp1.innerText = `A entrada é de R$ ${entrada.toFixed(2)}`;
  resp2.innerText = `Saldo em 12x de R$ ${saldo.toFixed(2)}`;
});
