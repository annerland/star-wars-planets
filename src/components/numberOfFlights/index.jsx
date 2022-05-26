import { useQuery } from "@apollo/client"
import { GET_FLIGHTS } from "../../routes/spaceCenters/graphql"
import PropTypes from 'prop-types'

export function NumberOfFlights(props) {
  const { data: flightsData } = useQuery(GET_FLIGHTS, {
    skip: !props.spaceCenterId,
    variables: { from: props.spaceCenterId, pageSize: 100, page: 1 }
  })

  return (
    <>
      {flightsData?.flights?.nodes?.length}
    </>
  )
}

NumberOfFlights.propTypes = {
  spaceCenterId: PropTypes.string,
}
