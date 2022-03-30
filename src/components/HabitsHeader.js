import styled from 'styled-components';
import profile from '../assets/profile.png';

function HabitsHeader(){
    return(
        <Header>
            <h1>TrackIt</h1>
            <img src={profile} alt="profile" />
        </Header>
    )
}

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #126BA5;

    h1 {
        color: #FFFFFF;
        font-family: 'Playball', cursive;
        height: 70px;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 70px;
    }

    img {
        width: 51px;
        height: 51px;
    }
`

export default HabitsHeader;