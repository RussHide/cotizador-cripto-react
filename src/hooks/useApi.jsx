import { useEffect, useState } from "react";

const useApi = (url) => {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        const consultarApi = async () =>{
            const urlApi = url;
            const respuesta = await fetch(urlApi);
            const resultado = await respuesta.json();
            const arrayCriptos = resultado.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            });
            setDatos(arrayCriptos);
        }
        consultarApi();
    }, [])
    return [datos]
}

export default useApi
