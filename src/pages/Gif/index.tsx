import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router'

import api from '../../services/api';
import giphy from '../../services/giphy';

import { Container } from './styles';

const Gif = withRouter(({ match: { params: { id } } }) => {
  const [frase, setFrase] = useState('');
  const [gif, setGif] = useState('');

  async function getGif(phrase: string) {
    const gifReturn: { data: { data: [ { images: { original: { url: string; } } } ] } } = await giphy.get(`/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${phrase}`);
    setGif(gifReturn.data.data[0]?.images?.original?.url || '');
  }

  async function getFrase() {
    const list = await api.get(`/frases/${id}`);

    if (list.data) {
      setFrase(list.data.phrase);
      getGif(list.data.phrase);
    }
  }

  useEffect(() => {
    getFrase();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <title>Gif: {id}</title>
      <h2>{`"${frase}" | `}</h2>
      {gif && <img src={gif} alt="Gif" />}
    </Container>
  )
})

export default Gif;