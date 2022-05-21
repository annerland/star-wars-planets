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
          <h1>Wolf Valleys Space Center</h1>
          <p className="space-description">
            Wolf Valleys Space Center is the place to be if 
            you like everything related to planets. 
            I know it's a bit meta, but come see by yourself
          </p>
          <div className="flight-numbers">
            <p>Number of flights:</p>
            <span>1596</span>
          </div>

          <div className="departures">
            <p className="departures-title">Departures</p>
            
            <div className="departures-content">
              <img src={PlanetIcon} />

              <div className="departures-description">
                <p>To: Planet Alpha</p>
                <span>15/10/2022 - 04:58pm</span>
              </div>
            </div>
          </div>
        </div>
      </div> : null}
    </DetailsContainer>
  )
}

export default Details
