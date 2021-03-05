import React, { useState, useEffect } from 'react'

import api from '../../services/api';

import { Container, ContentInput } from './styles';

export const Home = () => {
  const [frase, setFrase] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setSuccess(false);

    const result = await api.post('/frases', { phrase: frase });

    if (result.data) {
      setSuccess(true);
    }
  }

  useEffect(() => {
    setSuccess(false);
  }, [frase]);

  return (
    <Container onSubmit={handleSubmit}>
      <h2>Cadastrar</h2>
      <ContentInput>
        <input
          required
          value={frase}
          onChange={(e) => setFrase(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </ContentInput>
      {success && (
        <span>{`"${frase}" | "Frase salva com sucesso"`}</span>
      )}
    </Container>
  )
}