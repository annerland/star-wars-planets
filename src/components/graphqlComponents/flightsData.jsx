import { useQuery } from "@apollo/client";
import { GET_FLIGHTS } from "../../routes/spaceCenters/graphql";

export function FlightsData({ spaceCenterId }) {
  const { data: flightsData } = useQuery(GET_FLIGHTS, {
    skip: !spaceCenterId,
    variables: { from: spaceCenterId }
  })

  return (
    <>
      {flightsData?.flights?.nodes?.length}
    </>
  )
}