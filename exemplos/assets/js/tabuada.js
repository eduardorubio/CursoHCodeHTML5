function calculaTabuada() {
  const tabuada = document.querySelector('#tabuada tbody');
  let valorA = parseInt(document.querySelector('#valorA').value);
  tabuada.innerHTML = '';
  for (let valorB = 0; valorB <= 10; valorB++) {
    const template = `<td>${valorA}</td>
                    <td>x</td>
                    <td>${valorB}</td>
                    <td>=</td>
                    <td>${valorA * valorB}</td>`;
    const tr = (document = document.createElement('tr'));
    tr.innerHTML = template;
    tabuada.append(tr);
  }
}

calculaTabuada();

document.querySelector('#valorA').addEventListener('change', calculaTabuada);
