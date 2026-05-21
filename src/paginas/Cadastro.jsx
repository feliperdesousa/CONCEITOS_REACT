export default function Cadastro([navegar]) {
   
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrar = async () => {
        const resultado = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nome, email, senha})
        });
        const data = await resultado.json()
        alert(data.message)
        if(data.Cadastro){
            navegar('usuarios')
        }
        
    }

    return (
        <div>
            <h1>Login</h1>
            <br />
            <input type="text" id="nome" placeholder="Digite o seu nome" value={email} onChange={(e) => setNome(e.target.value)}/>
            <br />
            <input type="text" id="email" placeholder="Digite o email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="text" id="senha" placeholder="Digite a senha" value={email} onChange={(e) => setSenha(e.target.value)}/>
            <br />
            <button onClick={() => cadastrar()}>Cadastrar</button>
            <br />
            <button onClick={() => navegar('login')}>Já tem cadastro?</button>
        </div>
    )
};