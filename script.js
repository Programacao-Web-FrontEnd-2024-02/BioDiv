// *** Manipulação do formulário de cadastro ***
function salvarCadastro(event) {
    event.preventDefault();

    // Coletando os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const dataEnvio = new Date().toLocaleString();

    // Criando o objeto de cadastro
    const cadastro = {
        nome,
        email,
        telefone,
        dataNascimento,
        senha,
        endereco,
        dataEnvio,
    };

    // Salvando no Local Storage
    adicionarAoLocalStorage('cadastros', cadastro);

    // Exibindo mensagem e resetando o formulário
    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastroForm').reset();
}

function salvarCadastroAdmin(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataEnvio = new Date().toLocaleString();

    // Criando o objeto de cadastro
    const cadastro = {
        nome,
        email,
        dataEnvio,
    };

    // Salvando no Local Storage
    adicionarAoLocalStorage('cadastros', cadastro);

    // Exibindo mensagem e resetando o formulário
    alert('Cadastro realizado com sucesso!');
    document.getElementById('adminForm').reset();

    exibirCadastros();
}


// *** Manipulação do Local Storage ***
function adicionarAoLocalStorage(chave, valor) {
    // Obtendo os itens existentes (ou criando uma nova lista)
    let itens = JSON.parse(localStorage.getItem(chave)) || [];
    itens.push(valor);

    // Salvando a lista atualizada
    localStorage.setItem(chave, JSON.stringify(itens));
}

// Função para exibir os cadastros
function exibirCadastros() {
    // Obtendo os cadastros do Local Storage
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Referência ao elemento da lista
    const listaElement = document.getElementById('cadastroList');

    // Limpando a lista antes de adicionar os novos itens
    listaElement.innerHTML = '';

    // Adicionando cada cadastro na lista
    cadastros.forEach(cadastro => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${cadastro.nome}, E-mail: ${cadastro.email}, Data de Envio: ${cadastro.dataEnvio}`;
        listaElement.appendChild(li);
    });
}

// Chamada inicial para exibir os cadastros existentes quando a página é carregada
window.onload = function() {
    exibirCadastros();
};

function limparDados(formId) {
    // Seleciona todos os campos dentro do formulário especificado pelo ID
    const campos = document.querySelectorAll(`#${formId} input, #${formId} textarea`);

    // Itera sobre os campos e limpa seus valores
    campos.forEach(campo => campo.value = '');
}


