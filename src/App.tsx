import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Route, Switch,  } from 'react-router'
import styled, { createGlobalStyle } from 'styled-components'

import { Details } from './pages/Details'
import { NotFound } from './pages/Error'
import { Home } from './pages/Home'

import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import history from './history';

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

  useEffect(() => {
    console.log('env', process.env, history);
  }, []);
  console.log('env w', process.env);
  return (
    <>
      <GlobalStyles />

      <Helmet>
        {console.log('env react', process.env.REACT_APP_NAME)}
        <title>{process.env.REACT_APP_NAME}</title>
      </Helmet>

      <Wrapper>
        <Navigation />

        <Switch>
          <Route path="/details/:id" component={Details} />
          <Route path="/" component={Home} exact />

          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Wrapper>
    </>
  )
};

export default App
