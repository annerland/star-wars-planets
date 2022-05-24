import { gql } from "@apollo/client"

export const GET_SPACECENTERS = gql`
  query SpaceCenters($page: Int, $pageSize: Int) {
    spaceCenters(page: $page, pageSize: $pageSize) {
      nodes {
        id
        name
        description
      }

      pagination {
        total
        page
        pageSize
      }
    }
  }
`

export const GET_FLIGHTS = gql`
  query Flights($from: ID, $page: Int, $pageSize: Int) {
    flights(from: $from, page: $page, pageSize: $pageSize) {
      nodes {
        id
        departureAt

        landingSite {
          planet {
            name
          }
        }
      }
      pagination {
        total
      }
    }
  }
`
