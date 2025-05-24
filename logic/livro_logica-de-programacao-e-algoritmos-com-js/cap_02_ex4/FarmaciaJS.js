const frm = document.querySelector("form")
const medicamento = document.querySelector("h3")
const resp1 = document.querySelector("h4")

frm.addEventListener ("submit", (e) => {
    const nome = frm.inNome.value
    const valor = Number(frm.inPreco.value)

    const total = Math.floor(valor * 2)

    medicamento.innerText = `Promoção de ${nome}`
    resp1.innerText = `Leve 2 por apenas: R$${total.toFixed(2)}`

    e.preventDefault();
})