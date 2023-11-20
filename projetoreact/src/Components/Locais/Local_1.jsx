import React from 'react';
import L1 from './Img/L1.jpeg';
import './style.css';
function Local_1() {
 return (
    <div className="carta">
      <div className="carta-image">
        <img src={L1}alt="Edifício Lellis" />
      </div>
      <div className="carta-contentudo">
        <h2 className='titulo-conteudo'>Edifício Lellis</h2>
        <h3>Rua Barão de Ipanema, 8 Copacabana</h3>
        <h4>Prédio residencial mais antigo da orla de Copacabana</h4>
        <p>
          Construído em estilo neoclássico, em 1928, o prédio ocupa metade da
          primeira quadra da Rua Barão de Ipanema. Ao lado foi erguido, na mesma
          época, o Edifício São Paulo, com a fachada semelhante.
        </p>
        <h3>Características:</h3>
        <ul>
          <li>É o único prédio com apartamento térreo voltado para a praia</li>
          <li>
            Possui entrada através de uma porta com acesso direto à Avenida
            Atlântica
          </li>
        </ul>
      </div>
      
    </div>
 );
}

export default Local_1;