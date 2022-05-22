import { DetailsContainer } from "./style"
import PlanetIcon from "../../assets/planet-loader.svg"
import CloseIcon from "../../assets/close-icon.svg"

const Details = (props) => {
  return (
    <DetailsContainer>
      {props.show ? <div className="details-container">
        <div onClick={props.hide} className="close">
          <img src={CloseIcon} />
        </div>
        <div className="content">
          <h1>{props.name}</h1>
          <p className="space-description">{props.description}</p>
          <div className="flight-numbers">
            <p>Number of flights:</p>
            <span>{props.numberOfFlights}</span>
          </div>

          <div className="departures">
            <p className="departures-title">Departures</p>
            
            <div className="departures-content">
              <img src={PlanetIcon} />

              <div className="departures-description">
                <p>To: {props.departureName}</p>
                <span>{props.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div> : null}
    </DetailsContainer>
  )
}

export default Details
