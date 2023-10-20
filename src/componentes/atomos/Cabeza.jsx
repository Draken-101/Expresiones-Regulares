import styled from 'styled-components'

const C = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    color: white;
    width: 100%;
    height: 50px;
    font-family: sans-serif;
`;
function Cabeza({text}){
    return(
        <>
            <C><span>{text}</span></C>
        </>
    );
}

export default Cabeza;