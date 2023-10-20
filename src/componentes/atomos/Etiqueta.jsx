import styled from 'styled-components'

const E = styled.label`
    font-size: ${props => (props.Size ? props.Size : "15px")};
    color: ${props =>(props.C ? props.C : "white")};
    font-family: sans-serif;
    transition: 1s;
`;
function Etiqueta({text, sz, c}){
    return(
        <>
            <E Size={sz} C={c} >{text}</E>
        </>
    );
}
export default Etiqueta;