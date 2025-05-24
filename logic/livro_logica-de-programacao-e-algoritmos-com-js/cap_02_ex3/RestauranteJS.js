const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener ("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const peso = Number(frm.inPeso.value)

    const total = (peso / 1000) * preco

    resp1.innerText = `Valor a pagar é de R$${total.toFixed(2)}`

    e.preventDefault();
})