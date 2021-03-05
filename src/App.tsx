import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch,  } from 'react-router'
import styled, { createGlobalStyle } from 'styled-components'

import Frases from './pages/Frases'
import Gif from './pages/Gif'
import { NotFound } from './pages/Error'
import { Home } from './pages/Home'

// import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Wrapper = styled.div`
  text-align: center;
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <Helmet>
        <title>{process.env.REACT_APP_NAME}</title>
      </Helmet>

      <Wrapper>
        <Navigation />

        <Switch>
          <Route path={`${process.env.PUBLIC_URL || ''}/frases`} component={Frases} />
          <Route path={`${process.env.PUBLIC_URL || ''}/nova`} component={Home} exact />
          <Route path={`${process.env.PUBLIC_URL || ''}/gif/:id`} component={Gif} exact />

          <Route component={NotFound} />
        </Switch>

        {/* <Footer /> */}
      </Wrapper>
    </>
  )
};

export default App
