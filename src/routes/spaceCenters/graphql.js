import { gql } from "@apollo/client";

export const GET_SPACECENTERS = gql`
  query {
    spaceCenters {
      nodes {
        id
        name
      }

      pagination {
        page
        pageSize
      }
    }
  }
`

export const GET_FLIGHTS = gql`
  query Flights($from: ID){
    flights(from: $from) {
      nodes {
        id
      }
    }
  }
`
