function calcular() {
  const valor = Number(document.getElementById('valorCurso').value);
  const parcelas = Number(document.getElementById('parcelas').value);
  const juros = Number(document.getElementById('juros').value);

  if (valor <= 0 || parcelas <= 0 || juros < 0) {
    alert('Preencha corretamente!');
    return;
  }

  let valorFinal = valor;

  if (juros > 0) {
    valorFinal = valor * Math.pow(1 + juros / 100, parcelas);
  }

  const valorParcela = valorFinal / parcelas;

  document.getElementById('resultado').innerHTML = `
    <h3>Resultado</h3>
    <p>Total: R$ ${valorFinal.toFixed(2)}</p>
    <p>${parcelas}x de R$ ${valorParcela.toFixed(2)}</p>
  `;
}