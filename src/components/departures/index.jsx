import { useQuery } from "@apollo/client";
import { GET_FLIGHTS } from "../../routes/spaceCenters/graphql";
import PlanetIcon from "../../assets/planet-loader.svg"
import { DepartureIcon, DeparturesContent, DeparturesFlights, DeparturesDate } from "./style";

function Departures({ spaceCenterId }) {
  const { data: flightsData } = useQuery(GET_FLIGHTS, {
    skip: !spaceCenterId,
    variables: { from: spaceCenterId, pageSize: 100 }
  })

  return (
    <DeparturesContent>
      <DepartureIcon src={PlanetIcon} />
      <div>
        <DeparturesFlights>To: {flightsData?.flights?.nodes?.map(elm => elm.landingSite.planet.name)[0]}</DeparturesFlights>
        <DeparturesDate>{flightsData?.flights?.nodes?.map(elm => elm.departureAt)[0]}</DeparturesDate>
      </div>
    </DeparturesContent>
  )
}

export default Departures
