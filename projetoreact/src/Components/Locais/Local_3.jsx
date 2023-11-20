import React from 'react';
import L3 from './Img/L3.jpeg';
function Local_3() {
 return (
    <div className="carta">
      <div className="carta-image">
        <img src={L3} alt="Palacio Duue de Caxias" />
      </div>
      <div className="carta-contentudo">
        <h2 className='titulo-conteudo'>Palácio Duque de Caxias</h2>
        <h3>Data de Construção - Endereço</h3>
        <h4>Breve descrição do local</h4>
        <p>
          Detalhes do local, incluindo características arquitetônicas,
          históricas, etc.
        </p>
        <h3>Características:</h3>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
        </ul>
      </div>
    </div>
 );
}

export default Local_3;