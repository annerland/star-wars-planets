import { CardContainer, IconPlant, CardName, CardFlights } from './style'
import Loader from '../loader'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <CardContainer onClick={props.onClick}>
      <IconPlant src={props.planet} />
      {props.loader ? <Loader width="200px" /> : <CardName>{props.name}</CardName>}
      {props.loader ? <Loader width="100px" /> : <CardFlights>Number of flights: {props.numberOfFlights}</CardFlights>}
    </CardContainer>
  )
}

export default Card

Card.propTypes = {
  onClick: PropTypes.func,
  planet: PropTypes.string,
  loader: PropTypes.bool,
  name: PropTypes.string,
  numberOfFlights: PropTypes.object
}
