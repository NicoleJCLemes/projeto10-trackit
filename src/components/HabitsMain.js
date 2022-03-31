import styled from 'styled-components';
import Header from '../layout/Header';

function HabitsMain(props) {
    const {token} = props
    return(
        <Main>
            <Header>
                <h1>Meus hábitos</h1>
                <div><ion-icon name="add-outline"></ion-icon></div>
            </Header>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </Main>
    )
}

 const Main = styled.main`
    margin-top: 70px;
    background-color: #F2F2F2;
    height: 527px;
    padding: 18px;

    p {
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
 `

export default HabitsMain;