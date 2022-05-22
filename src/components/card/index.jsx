import Planet from '../../assets/planet-5.svg'
import { CardContainer } from './style'

const Card = (props) => {
  return (
    <CardContainer>
      <div onClick={props.onClick} className='card-container'>
        <img src={Planet} />
        <div className="content">
          <p>{props.name}</p>
          <span>Number of flights: {props.numberOfFlights}</span>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card
