import React, { useState } from 'react';

const Buscador = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Implementing search logic
        // Assuming you have a function called search that performs the actual search
        const handleSearch = () => {
            search(searchTerm);
            console.log('Realizando búsqueda:', searchTerm);
        };
        console.log('Realizando búsqueda:', searchTerm);
    };

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleInputChange} />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default Buscador;