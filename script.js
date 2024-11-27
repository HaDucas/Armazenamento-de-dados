// Inicializar a tabela com os registros salvos no LocalStorage
const registrosKey = "registros";
const registrosTable = document.getElementById("registrosTable");
const registroForm = document.getElementById("registroForm");

function carregarRegistros() {
    const registros = JSON.parse(localStorage.getItem(registrosKey)) || [];
    registrosTable.innerHTML = registros.map((registro, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${registro.nome}</td>
            <td>${registro.descricao}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removerRegistro(${index})">Remover</button>
            </td>
        </tr>
    `).join("");
}

function salvarRegistro(nome, descricao) {
    const registros = JSON.parse(localStorage.getItem(registrosKey)) || [];
    registros.push({ nome, descricao });
    localStorage.setItem(registrosKey, JSON.stringify(registros));
    carregarRegistros();
}

function removerRegistro(index) {
    const registros = JSON.parse(localStorage.getItem(registrosKey)) || [];
    registros.splice(index, 1);
    localStorage.setItem(registrosKey, JSON.stringify(registros));
    carregarRegistros();
}

// Adicionar evento ao formulário
registroForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("inputNome").value;
    const descricao = document.getElementById("inputDescricao").value;

    salvarRegistro(nome, descricao);

    // Limpar campos
    registroForm.reset();
});

// Carregar registros ao abrir a página
carregarRegistros();
