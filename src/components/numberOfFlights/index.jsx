import { useQuery } from "@apollo/client";
import { GET_FLIGHTS } from "../../routes/spaceCenters/graphql";

export function NumberOfFlights({ spaceCenterId }) {
  const { data: flightsData } = useQuery(GET_FLIGHTS, {
    skip: !spaceCenterId,
    variables: { from: spaceCenterId, pageSize: 100, page: 1 }
  })

  return (
    <>
      {flightsData?.flights?.nodes?.length}
    </>
  )
}