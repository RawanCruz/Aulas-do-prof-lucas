document.getElementById("submitBtn").addEventListener("click", function () {
    let nome = prompt("Digite seu nome completo:");
    if (!nome) {
        alert("Você precisa informar seu nome para enviar a prova.");
        return;
    }

    let nota = 0;
    let total = 0;

    // Respostas corretas (mapeadas por ID ou name)
    const respostas = {
        q1: "processador", // radio
        q2: "saida", // radio
        q3: ["fonte", "estabilizador", "nobreak"], // checkbox
        q4: ["video", "rede"], // checkbox
        q5: "true", // verdadeiro ou falso
        q6: "false",
        q7: "true",
        q8: "false",
        q9: "true",
        q10: "false",
        q11: "true",
        q12: "true",
        q13: "false",
        q14: "false",
        q15: "true",
        q16: "true",
        q17: "false",
        q18: "false"
        // Dissertativas não são corrigidas automaticamente
    };

    // Questões de múltipla escolha (radio)
    ["q1", "q2"].forEach(id => {
        const marcada = document.querySelector(`input[name="${id}"]:checked`);
        if (marcada && marcada.value === respostas[id]) nota++;
        total++;
    });

    // Questões de múltiplas respostas (checkbox)
    ["q3", "q4"].forEach(id => {
        const marcadas = Array.from(document.querySelectorAll(`input[name="${id}[]"]:checked`)).map(e => e.value);
        const correta = respostas[id];
        const acertos = correta.every(resp => marcadas.includes(resp)) && marcadas.every(resp => correta.includes(resp));
        if (acertos) nota++;
        total++;
    });

    // Verdadeiro ou falso
    for (let i = 5; i <= 18; i++) {
        const id = "q" + i;
        const marcada = document.querySelector(`input[name="${id}"]:checked`);
        if (marcada && marcada.value === respostas[id]) nota++;
        total++;
    }

    // Gerar conteúdo do arquivo
    const texto = `Aluno: ${nome}\nNota: ${nota} de ${total}\n\nObservações:\n- Respostas dissertativas devem ser corrigidas manualmente.`;

    // Criar arquivo .txt e forçar download
    const blob = new Blob([texto], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = `${nome.replace(/\s+/g, "_")}_nota.txt`;
    link.href = URL.createObjectURL(blob);
    link.click();
});
