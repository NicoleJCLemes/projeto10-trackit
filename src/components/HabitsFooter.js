import styled from 'styled-components';

function HabitsFooter(){
    return(
        <Footer>
            <p>Hábitos</p>
            <div>Hoje</div>
            <p>Histórico</p>
        </Footer>
    )
}

const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70px;
    width: 100%;
    position: absolute;
    bottom: 0;

    p {
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }

    div {
        width: 91px;
        height: 91px;
        border-radius: 50%;
        text-align: center;
        line-height: 91px;
        margin-bottom: 45px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 17.976px;
    }
`

export default HabitsFooter;