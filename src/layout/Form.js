import styled from 'styled-components';

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

input {
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 6px;

    &::placeholder {
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    padding-left: 11px;
    }
}
`
export default Form;