import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  color: #9649cb;
`

const Wrapper = styled.div`
  font-weight: bold;
  color: #ccc;
`

export const Footer = () => (
  <Wrapper>
    <Link href="https://github.com/willianbvsanches13/cra-serverless">Repositório do projeto</Link>
  </Wrapper>
)
