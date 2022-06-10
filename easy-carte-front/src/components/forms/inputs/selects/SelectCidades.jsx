import { useState, useEffect } from 'react';
import { externalApiClient } from '../../../../providers/externalApiClient';
import DefaultSelect from './DefaultSelect';

function SelectCidades() {
    const [cidades, setCidades] = useState({});

    useEffect(() => {
        externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/municipios')
            .then((response) => {
                setCidades(response.data);
            });
    }, []);

    return (
        <DefaultSelect
            data={cidades}
            selectId="cidades"
            selectLabel="Cidade"
            optionIdField="id"
            optionTextField="nome"
        />
    );
}

export default SelectCidades;