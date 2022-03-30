import { Link } from 'react-router-dom';
import { useState, useNavigate } from 'react';
import axios from 'axios';
import trackit from '../assets/trackit.png';
import ContainerHomePage from '../layout/ContainerHomePage'
import Form from '../layout/Form';
import ButtonHomePage from '../layout/ButtonHomePage';

function LoginPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function Login(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, {
            email,
            password
        });
        promise.then(response => {
            const {data} = response
            console.log(data)
            navigate("/habitos")
        });
        promise.catch(err => console.log(err.response));
    }

    return(
        <ContainerHomePage>
            <div>
                <img src={trackit} alt="logo" />
            </div>
            <Form>
                <input placeholder='email' value={email} type="email" required onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='senha' value={password} type="password" required onChange={(e) => setPassword(e.target.value)} />
                <ButtonHomePage onClick={Login}>Entrar</ButtonHomePage>
            </Form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </ContainerHomePage>
    )
}

export default LoginPage;