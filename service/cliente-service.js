const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Não foi possível listar os clientes');
        })
}

const criaCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(reponse => {
            if (reponse.ok) {
                return reponse.body;
            }
            throw new Error('Não foi possível criar o cliente');
        });
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok)
                throw new Error('Não foi possível remover o cliente');
        })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Não foi possível detalhar o clientes');
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Não foi possível atualizar os clientes');
        });
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}