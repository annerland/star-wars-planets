import { useQuery } from "@apollo/client"
import { GET_FLIGHTS } from "../../routes/spaceCenters/graphql"
import PlanetIcon from "../../assets/planet-loader.svg"
import { DepartureIcon, DeparturesContent, DeparturesFlights, DeparturesDate } from "./style"
import Loader from '../loader'
import dayjs from "dayjs"
import PropTypes from 'prop-types'
function Departures(props) {
  const { data: flightsData } = useQuery(GET_FLIGHTS, {
    skip: !props.spaceCenterId,
    variables: { from: props.spaceCenterId, pageSize: 100 }
  })
  const date = dayjs(flightsData?.flights?.nodes?.map(elm => elm.departureAt)[0]).format("YYYY/MM/DD")

  return (
    <DeparturesContent>
      <DepartureIcon src={PlanetIcon} />
      <div>
      {props.loader ? <Loader width="200px"  /> : <DeparturesFlights>To: {flightsData?.flights?.nodes?.map(elm => elm.landingSite.planet.name)[0]}</DeparturesFlights>}
      {props.loader ? <Loader width="100px" /> : <DeparturesDate>{date}</DeparturesDate>}
      </div>
    </DeparturesContent>
  )
}

export default Departures

Departures.propTypes = {
  spaceCenterId: PropTypes.string,
  name: PropTypes.string,
}
