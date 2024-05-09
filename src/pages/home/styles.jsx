import styled from 'styled-components'

export const Container = styled.div `
    background-color: #e5e51b;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: white;
    }

    input{
        height: 35px;
        border-radius: 5px;
        border:none;
        margin-top: 30px;
        outline: none;
        padding: 10px
    }
    
`

export const AddButton = styled.button `
    background-color: #6cf000;
    color: whhite;
    height: 35px;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    margin-left: 10px;

    &:hover{
        opacity: 0.8;
    }
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    margin-top: 15px;
    padding: 10px;

    p{
        text-transform: capitalize;
        font-weight: bold;
    }
`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`
