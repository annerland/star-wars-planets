import { useState } from "react"
import Card from "../../components/card"
import Details from "../../components/details"
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default function Planets() {
  const [showDetails, setShowDetails] = useState(false)

  const openDetails = () => {
    setShowDetails(elm => !elm)
  }

  return (
    <div className="planets-container">
      <h1>Spacious</h1>

      <Card onClick={openDetails} />
      <Details show={showDetails} hide={() => setShowDetails(false)} />
    </div>
  )
}