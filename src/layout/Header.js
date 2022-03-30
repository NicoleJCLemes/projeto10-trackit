import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        }

    div {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ion-icon {
        color: #FFFFFF;
        font-size: 20px;
        --ionicon-stroke-width: 50px;
    }
 `

 export default Header;