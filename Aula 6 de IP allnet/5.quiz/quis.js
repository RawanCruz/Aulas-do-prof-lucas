function verificarRespostas() {
  // Perguntas e respostas corretas
  const respostasCorretas = {
    q1: "B",
    q2: "D",
    q3: "A",
    q4: "A",
    q5: "C",
    q6: ["1", "3"], // Respostas corretas para checkbox
    q7: ["1", "2", "3"],
    q8: ["3"],
    q9: ["1", "2"],
    q10: "true",
    q11: "false",
    q12: "true",
    q13: "true",
    q14: "true",
    q15: "true",
    q16: "true",
    q17: "false",
    q18: "true",
    q19: "true",
    q20: "false",
    q21: "true",
    q22: "true",
    q23: "true",
    q24: "false",
    q25: "true"
  };

  let pontuacao = 0;

  // Verificar respostas de múltipla escolha e verdadeiro/falso
  for (const [pergunta, respostaCorreta] of Object.entries(respostasCorretas)) {
    const elementos = document.getElementsByName(pergunta);

    if (Array.isArray(respostaCorreta)) {
      // Checkbox
      const respostasSelecionadas = Array.from(elementos)
        .filter((el) => el.checked)
        .map((el) => el.value);

      if (
        respostasSelecionadas.length === respostaCorreta.length &&
        respostasSelecionadas.every((val) => respostaCorreta.includes(val))
      ) {
        pontuacao++;
      }
    } else {
      // Radio ou Select
      const respostaSelecionada = Array.from(elementos).find((el) => el.checked || el.selected)?.value;
      if (respostaSelecionada === respostaCorreta) {
        pontuacao++;
      }
    }
  }

  // Criar input para o nome do aluno
  const nomeAluno = prompt("Digite seu nome:");
  if (nomeAluno) {
    alert(`Parabéns, ${nomeAluno}! Você tirou ${pontuacao} de 25.`);
  }
}

