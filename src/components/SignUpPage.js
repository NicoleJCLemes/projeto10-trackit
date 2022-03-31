import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { axios } from 'axios';
import trackit from '../assets/trackit.png';
import ContainerHomePage from '../layout/ContainerHomePage'
import Form from '../layout/Form';
import ButtonHomePage from '../layout/ButtonHomePage';

function SignUpPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    function Register(event){
        
        event.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, {
            email,
            name,
            image,
            password
        });

        promise.then(navigate("/"));
        promise.catch(alert("Não foi possível realizar o cadastro."));
    }

    return(
        <ContainerHomePage>
            <div>
                <img src={trackit} alt="logo" />
            </div>
            <Form onSubmit={Register}>
                <input placeholder='email' value={email} type="email" required onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='senha' value={password} type="password" required onChange={(e) => setPassword(e.target.value)} />
                <input placeholder='nome' value={name} type="text" required onChange={(e) => setName(e.target.value)} />
                <input placeholder='foto' value={image} type="url" required onChange={(e) => setImage(e.target.value)} />
                <ButtonHomePage type='submit'>Cadastrar</ButtonHomePage>
            </Form>
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </ContainerHomePage>
    )
}

export default SignUpPage;