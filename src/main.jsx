import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './styles/globalStyles'
import theme from './styles/theme'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  headers: {
    "Authorization": "Bearer API_KEY"
  },
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
