function salvarCadastro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const dataEnvio = new Date().toLocaleString();

    const cadastro = {
        nome,
        email,
        telefone,
        dataNascimento,
        senha,
        endereco,
        dataEnvio,
    };

    adicionarAoLocalStorage('cadastros', cadastro);

    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastroForm').reset();
}

function salvarCadastroAdmin(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataEnvio = new Date().toLocaleString();

    const cadastro = {
        nome,
        email,
        dataEnvio,
    };

    adicionarAoLocalStorage('cadastros', cadastro);

    alert('Cadastro realizado com sucesso!');
    document.getElementById('adminForm').reset();

    exibirCadastros();
}


function adicionarAoLocalStorage(chave, valor) {
    let itens = JSON.parse(localStorage.getItem(chave)) || [];
    itens.push(valor);

    localStorage.setItem(chave, JSON.stringify(itens));
}

function exibirCadastros() {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const listaElement = document.getElementById('cadastroList');

    listaElement.innerHTML = '';

    cadastros.forEach((cadastro, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Nome: ${cadastro.nome}, E-mail: ${cadastro.email}, Data de Envio: ${cadastro.dataEnvio} 
            <button id="btn-excluir" onclick="excluirCadastro(${index})">Excluir</button>
        `;
        listaElement.appendChild(li);
    });
}

function excluirCadastro(index) {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    cadastros.splice(index, 1);

    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    exibirCadastros();
}

function excluirTodosCadastros() {
    const confirmacao = confirm("Tem certeza de que deseja excluir todos os cadastros?");
    if (confirmacao) {
        localStorage.removeItem('cadastros');

        document.getElementById('cadastroList').innerHTML = '';

        alert('Todos os cadastros foram excluídos!');
    }
}

function pesquisarCadastros() {
    const termo = document.getElementById('pesquisa').value.toLowerCase();
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const resultados = cadastros.filter(cadastro => 
        cadastro.nome.toLowerCase().includes(termo) || 
        cadastro.email.toLowerCase().includes(termo)
    );

    const listaElement = document.getElementById('cadastroList');
    listaElement.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach((cadastro, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                Nome: ${cadastro.nome}, E-mail: ${cadastro.email}, Data de Envio: ${cadastro.dataEnvio} 
                <button id="btn-excluir" onclick="excluirCadastro(${index})">Excluir</button>
            `;
            listaElement.appendChild(li);
        });
    } else {
        listaElement.innerHTML = '<li>Nenhum cadastro encontrado.</li>';
    }
}


window.onload = function() {
    exibirCadastros();
};

function limparDados(formId) {
    const campos = document.querySelectorAll(`#${formId} input, #${formId} textarea`);
    
    campos.forEach(campo => campo.value = '');
}


