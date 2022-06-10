import { useState, useEffect } from 'react';
import { externalApiClient } from '../../../../providers/externalApiClient';
import DefaultSelect from './DefaultSelect';

function SelectEstados() {

    const [estados, setEstados] = useState({});

    useEffect(() => {
        externalApiClient.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then((response) => {
                setEstados(response.data);
            });
    }, []);

    return (
        <DefaultSelect
            data={estados}
            selectId="estados"
            selectLabel="Estado"
            optionIdField="id"
            optionTextField="nome"
        />
    );
}

export default SelectEstados;