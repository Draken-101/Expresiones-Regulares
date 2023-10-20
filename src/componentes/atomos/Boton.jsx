import styled from "styled-components";

const B = styled.button`
    transition: 1s;
    background-color: gray;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;
    font-family: sans-serif;
    left: ${props => ( props.Wi ? props.Wi/2 : "100%")};
    width: ${props => (props.Wi ? props.Wi : "100%")};
    height: ${props => (props.He ? props.He : "15px")};
    &:hover{
        background-color: #0000;
    }
`;

function Boton({w, h, text, Func}){
    return(
        <>
            <B Wi={w} He={h} onClick={Func}>{text}</B>
        </>
    );
}
export default Boton;