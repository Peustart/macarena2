// Função para adicionar um novo item na tabela
function adicionarNaTabela(nome, email, telefone) {
    // Encontra a tabela pelo id
    const tabela = document.getElementById("tabelaCadastro").getElementsByTagName('tbody')[0];
    
    // Cria uma nova linha na tabela
    const novaLinha = tabela.insertRow();

    // Cria as células da nova linha (para Nome, Email, Telefone e Ações)
    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    const celulaTelefone = novaLinha.insertCell(2);
    const celulaAcoes = novaLinha.insertCell(3);

    // Preenche as células com os dados do cadastro
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;
    celulaTelefone.textContent = telefone;

    // Criar botão de Editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => editarCadastro(novaLinha, nome, email, telefone);
    celulaAcoes.appendChild(btnEditar);

    // Criar botão de Apagar
    const btnApagar = document.createElement("button");
    btnApagar.textContent = "Apagar";
    btnApagar.onclick = () => apagarCadastro(novaLinha);
    celulaAcoes.appendChild(btnApagar);
}

// Função para editar um item na tabela
function editarCadastro(linha, nomeAtual, emailAtual, telefoneAtual) {
    // Solicita novos dados através de prompts
    const novoNome = prompt("Editar nome", nomeAtual);
    const novoEmail = prompt("Editar email", emailAtual);
    const novoTelefone = prompt("Editar telefone", telefoneAtual);

    // Se o usuário forneceu novos dados, atualiza a tabela
    if (novoNome && novoEmail && novoTelefone) {
        linha.cells[0].textContent = novoNome;
        linha.cells[1].textContent = novoEmail;
        linha.cells[2].textContent = novoTelefone;
    }
}

// Função para apagar um item da tabela
function apagarCadastro(linha) {
    if (confirm("Você tem certeza que deseja apagar esse cadastro?")) {
        linha.remove();
    }
}

// Lidar com o envio do formulário de cadastro
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Verifica se todos os campos foram preenchidos
    if (nome && email && telefone) {
        // Adiciona o novo cadastro na tabela
        adicionarNaTabela(nome, email, telefone);

        // Limpa os campos do formulário após o cadastro
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
