import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    linhaNovoCliente.innerHTML = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li>
                <button type="submit" class="botao-simples botao-simples--editar">Editar</button>
            </li>
            <li>
                <button type="submit" class="botao-simples botao-simples--excluir" type="button">Excluir</button>
            </li>
        </ul>
    </td>`

    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (event) => {
    event.preventDefault();
    let botaoDeletar = event.target.className === 'botao-simples botao-simples--excluir';
    let botaoEditar = event.target.className === 'botao-simples botao-simples--editar';

    if (botaoDeletar) {
        const linhaCLiente = event.target.closest('[data-id]')
        clienteService.removeCliente(linhaCLiente.dataset.id)
            .then(() => linhaCLiente.remove());
    }

    if (botaoEditar) {
        const linhaCLiente = event.target.closest('[data-id]')
        location.href = `../telas/edita_cliente.html?id=${linhaCLiente.dataset.id}`;

    }

})

clienteService.listaClientes()
    .then((data) => {
        data.forEach(elemento => tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id)))
    })