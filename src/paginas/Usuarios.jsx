import { useEffect, useState } from "react"

export default function Usuarios() {
    const [contador, setContador] = useState(0)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [modal, setModal] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        document.title = 'Contagem ' + contador
        const buscarUsuarios = async () => {
        const resposta = await fetch('https://localhost:3000/usuarios')
        const data = await resposta.json()
        setUsuarios(data);
        }
        buscarUsuarios()
    }, [contador])

    const editar = (usuario) => {
        if(!usuario.email || !usuario.nome || !usuario.senha || !usuario.id) {
            alert('Erro ao buscar usuário')
            return
        }
        setModal(true)
        setEmail(usuario.email)
        setNome(usuario.nome)
        setSenha(usuario.senha)
        setId(usuario.id)
    }

    const confirmarEdicao = async () => {
        const resposta = await fetch(`https://localhost:3000/usuarios/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ nome, email, senha })
        });
        const data = await resposta.json()
    }

    return (
        <div>
            <h1>Usuarios</h1>
            <h1>{contador}</h1>
            <button onClick={() => {setContador(contador + 1)}}>Somar</button>

            {modal && (
                <div className="fundo-modal">
                    <div className="modal-contend">
                        <input type="text" id="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                        <input type="text" id="nome" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} /> <br />
                        <input type="password" id="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br />

                        <button onClick={() => {confirmarEdicao()}}>Confirmar edição</button>
                    </div>
                </div>
            )}

            <h3>{email}</h3>
            <h3>{nome}</h3>
            <h3>{senha}</h3>

            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <b>{usuario.nome}</b>
                        <br />
                        STATUS: {usuario.ativo ? 'Ativo' : 'Inativo'}
                        <br />
                        <button onClick={() => { editar(usuario) }}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};