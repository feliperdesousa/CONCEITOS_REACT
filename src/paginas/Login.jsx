export default function Login([navegar]) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = async () => {
        const resultado = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, senha})
        });
        const data = await resultado.json()
        alert(data.message)
        if(data.Login){
            navegar('usuarios')
        }
        
    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            <input type="text" id="email" placeholder="Digite o email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="text" id="senha" placeholder="Digite a senha" value={email} onChange={(e) => setSenha(e.target.value)}/>
            <br />
            <button onClick={() => entrar()}>Entrar</button>
            <br />
            <button onClick={() => navegar('cadastro')}>Não tem cadastro?</button>
        </div>
    )
};