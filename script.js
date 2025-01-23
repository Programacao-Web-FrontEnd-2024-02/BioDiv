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

    // Criando o objeto de cadastro
    const cadastro = {
        nome,
        email,
        telefone,
        dataNascimento,
        senha,
        endereco,
    };

    // Salvando no Local Storage
    adicionarAoLocalStorage('cadastros', cadastro);

    // Exibindo mensagem e resetando o formulário
    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastroForm').reset();
}

// *** Manipulação do Local Storage ***
function adicionarAoLocalStorage(chave, valor) {
    // Obtendo os itens existentes (ou criando uma nova lista)
    let itens = JSON.parse(localStorage.getItem(chave)) || [];
    itens.push(valor);

    // Salvando a lista atualizada
    localStorage.setItem(chave, JSON.stringify(itens));
}

function obterDoLocalStorage(chave) {
    // Retorna os itens armazenados, ou uma lista vazia se não houver nada
    return JSON.parse(localStorage.getItem(chave)) || [];
}

// Chamando a função de inicialização
inicializarCadastro();

function salvarCadastroAdmin(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Criando o objeto de cadastro
    const cadastro = {
        nome,
        email,
    };

    // Salvando no Local Storage
    adicionarAoLocalStorage('cadastros', cadastro);

    // Exibindo mensagem e resetando o formulário
    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastroForm').reset();
}

// Função para adicionar o item ao LocalStorage
function adicionarAoLocalStorage(chave, valor) {
    let itens = JSON.parse(localStorage.getItem(chave)) || [];
    itens.push(valor);
    localStorage.setItem(chave, JSON.stringify(itens));
}

function limparDados(formId) {
    // Seleciona todos os campos dentro do formulário especificado pelo ID
    const campos = document.querySelectorAll(`#${formId} input, #${formId} textarea`);

    // Itera sobre os campos e limpa seus valores
    campos.forEach(campo => campo.value = '');
}


