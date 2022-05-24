import React from "react"
import { DetailsContainer } from "./style"
import CloseIcon from "../../assets/close-icon.svg"
import Departures from "../departures"
import { DeparturesTitle } from "../departures/style"
import { useQuery } from "@apollo/client"
import { GET_SPACECENTERS } from "../../routes/spaceCenters/graphql"

const Details = (props) => {
  const { loading, error, data } = useQuery(GET_SPACECENTERS, {
    variables: { page: 1, pageSize: 10 }
  })

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

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

        <DeparturesTitle>Departures</DeparturesTitle>
          {data?.spaceCenters?.nodes?.map(spaceCenter => 
            <Departures spaceCenterId={spaceCenter.id} />
          )}
        </div>
      </div> : null}
    </DetailsContainer>
  )
}

export default Details
