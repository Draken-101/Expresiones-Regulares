import Cabeza from "../atomos/Cabeza";
import styled from 'styled-components';
import Etiqueta from "../atomos/Etiqueta";
import Boton from '../atomos/Boton'
import Entrada  from '../atomos/Entrada';
import { useState } from "react";

const Contenedor = styled.div`
    position: relative;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 50%;
    left: 25%;
`;

function Formulario(){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [vN, setVn] = useState('');
    const [vP, setVp] = useState('');

    const onCn = (n) => {
        setUser(n.target.value);
        console.log(user);
    }

    const onCp = (p) => {
        setPassword(p.target.value);
        console.log(password);
    }

    const mostrarN = () => {
            if(user !== "leo" && user !== ""){
                setVn("Usuario no Valido");
            } else {
                setVn("");
            }
        
    }
    const mostrarP = (p) => {
        if(password !== "123456" && password !== ""){
            setVp("Usuario no Valido");
        } else {
            setVp("");
        }
    }

    return(
        <div>
            <Cabeza text={"Formulario"} >
                <Etiqueta text={"Formulario"} />
            </Cabeza>
            <Contenedor>
                <Etiqueta text={vN} c={"red"} sz={"20px"}/>
                <Entrada id='n' text={"    Nombre"} w={"90%"} OC={mostrarN} onC={onCn}></Entrada>
                
                <Etiqueta text={vP} c={"red"} sz={"20px"}/>
                <Entrada id='p' text={"    Contraseña"} t={"password"} w={"90%"} OC={mostrarP} onC={onCp}></Entrada>
                <Boton w={"50%"} h={"30px"} text={"Login"} ></Boton>
            </Contenedor>
        </div>
    );
}

export default Formulario;