import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';
import trackit from '../assets/trackit.png';
import ContainerHomePage from '../layout/ContainerHomePage'
import Form from '../layout/Form';
import ButtonHomePage from '../layout/ButtonHomePage';

function LoginPage(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const {saveToken} = props

    function Login(){

        setIsLoading(true)
        
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, {
            email,
            password
        });
        
        promise.then(response => {
            const {data} = response
            console.log(data)
            saveToken(data.token)
            navigate("/hoje")
        });
        promise.catch(alert("Não foi possível realizar o login."));
    }

    return(
        <ContainerHomePage>
            <div>
                <img src={trackit} alt="logo" />
            </div>
            {isLoading === false?
                <Form>
                    <input placeholder='email' value={email} type="email" required onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='senha' value={password} type="password" required onChange={(e) => setPassword(e.target.value)} />
                    <ButtonHomePage type='submit' onClick={Login}>Entrar</ButtonHomePage>
                </Form> : 
                <Form>
                    <input placeholder='email' value={email} type="email" disabled />
                    <input placeholder='senha' value={password} type="password" disabled />
                    <ButtonHomePage className='opacity' type='submit' disabled>
                        <ThreeDots color="#FFFFFF" height={80} width={80} />
                    </ButtonHomePage>
                </Form>}
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </ContainerHomePage>
    )
}

export default LoginPage;