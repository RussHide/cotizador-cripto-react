import styled from "@emotion/styled";

const Label = styled.label`
    color: white;
`

export const useSelectMonedas = (label) => {
   const SelectMonedas = () => (
       <>
            <Label htmlFor="">
                {label}
            </Label>
       </>
   )
   return [SelectMonedas]
}
