import Planet from '../../assets/planet-5.svg'
import { CardContainer } from './style'

const Card = (props) => {
  return (
    <CardContainer>
      <div onClick={props.onClick} className='card-container'>
        <img src={Planet} />
        <div className="content">
          <p>Wolf Valleys Space Center</p>
          <span>Number of flights: 1596</span>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card
