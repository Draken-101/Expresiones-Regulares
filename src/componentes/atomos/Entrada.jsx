import styled from 'styled-components'
import Etiqueta from './Etiqueta';

const E = styled.input`
    width: ${props => (props.Wi ? props.Wi : "100%")};
    background-color: gray;
    border-radius: 5px;
    text-decoration: none;
    border: 1px solid black;
    font-family: sans-serif;
    margin-bottom: 10px;
    &::placeholder{
        color:white;
    }
`;

const L = styled.label`
    color: white;
    font-family: sans-serif;
`;

function Entrada({text, t, w, OC, onC}){
    return(
        <div style={{width : w}}>
            <L htmlFor={text}>{text}</L>
            <E id={text} name={text} type={t} Wi={w} onBlur={OC} onChange={onC}></E>
            
        </div>
    );
}

export default Entrada;