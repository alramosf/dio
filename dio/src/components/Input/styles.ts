import styled from "styled-components";

export const InputContainer = styled.div`
    max-width: 275%;
    width: 100%;
    height: 30px
    border-bottom: 1px solid #3b3450;

    display:flex;
    align-items:center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right:10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color:#ffffff;
    width:100%;
    border: 0;
    hight: 30px;;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;

`