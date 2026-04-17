let nome = prompt("Digite seu nome:");

// renda
let renda = Number(prompt("Digite sua renda mensal:"));
while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido. Digite um número para renda:"));
}

// quantidade de despesas
let qtd = Number(prompt("Quantas despesas deseja informar (1 a 5)?"));
while (isNaN(qtd) || qtd < 1 || qtd > 5) {
  qtd = Number(prompt("Valor inválido. Digite um número entre 1 e 5:"));
}


let totalDespesas = 0;

for (let i = 1; i <= qtd; i++) {
  let despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

  while (isNaN(despesa)) {
    despesa = Number(prompt(`Valor inválido. Digite a despesa ${i}:`));
  }

  totalDespesas += despesa;
}

// Análise
let mensagem = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.3) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// Saída final
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Situação: ${mensagem}
`;

// mostrar
alert(resultado);
console.log("===== RESULTADO =====");
console.log(resultado);