import React, { useEffect, useState } from "react"
import { DetailsContainer, Close, CloseIconStyle, DetailsTitle, DetailsDescription, FlightNumbers, Number } from "./style"
import CloseIcon from "../../assets/close-icon.svg"
import Departures from "../departures"
import { DeparturesTitle } from "../departures/style"
import { useQuery } from "@apollo/client"
import { GET_SPACECENTERS } from "../../routes/spaceCenters/graphql"
import PropTypes from 'prop-types'

const Details = (props) => {
  const { loading, error, data } = useQuery(GET_SPACECENTERS, {
    variables: { page: 1, pageSize: 10 }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  
  return (
    <>
      {props.show ? 
        <DetailsContainer>
          <Close onClick={props.hide}>
            <CloseIconStyle src={CloseIcon} />
          </Close>

          <DetailsTitle>{props.name}</DetailsTitle>
          <DetailsDescription>{props.description}</DetailsDescription>
          <FlightNumbers>Number of flights:</FlightNumbers>
          <Number>{props.numberOfFlights}</Number>

          <DeparturesTitle>Departures</DeparturesTitle>
            {data?.spaceCenters?.nodes?.map(spaceCenter => 
              <Departures key={spaceCenter.id} spaceCenterId={spaceCenter.id} />
            )}
        </DetailsContainer> : null}
    </>
  )
}

export default Details

Details.propTypes = {
  hide: PropTypes.func,
  show: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  numberOfFlights: PropTypes.object
}
