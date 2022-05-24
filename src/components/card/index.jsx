import Planet from '../../assets/planet-5.svg'
import { CardContainer, IconPlant, CardName, CardFlights } from './style'

const Card = (props) => {
  return (
    <CardContainer onClick={props.onClick}>
      <IconPlant src={Planet} />
      <CardName>{props.name}</CardName>
      <CardFlights>Number of flights: {props.numberOfFlights}</CardFlights>
    </CardContainer>
  )
}

export default Card
