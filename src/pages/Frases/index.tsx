import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import api from '../../services/api';

import { FraseContent, StyledLink } from './styles';

interface FraseInterface {
  phrase: string;
  phraseId: string;
}

function Frase ({ item }: { item: FraseInterface }) {
  return (
    <FraseContent>
      <h3>{`"${item.phrase}" | `}</h3>
      <StyledLink to={`${process.env.PUBLIC_URL || ''}/gif/${item.phraseId}`}>mostrar gifs</StyledLink>
    </FraseContent>
  )
};

function Details() {
  const [list, setList] = useState([]);

  async function getList() {
    const list = await api.get('/frases');

    if (list.data) {
      setList(list.data);
    }
  }
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Lista de frases</title>
      </Helmet>
      <h2>Frases:</h2>
      {list.map((item: FraseInterface) => <Frase item={item} />)}
    </div>
  );
};

export default Details;