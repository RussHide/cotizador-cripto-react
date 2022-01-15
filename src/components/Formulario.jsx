import styled from "@emotion/styled";
import { monedas } from "../data";
import { useSelectMonedas } from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 7px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Formulario = () => {



    const [SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
    const [SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', monedas);
    return (
        <form>
            <SelectMonedas/>
            <SelectCriptomonedas/>
            <InputSubmit
            type="submit"
            value='Cotizar'
            />
        </form>
    )
}
