import { useState } from "react"
import Card from "../../components/card"
import Details from "../../components/details"
import { GET_SPACECENTERS } from "./graphql"
import { FlightsData } from "../../components/graphqlComponents/flightsData"
import { useQuery } from "@apollo/client";
import { Cards } from "./style"; 

export default function Planets() {
  const { loading, error, data } = useQuery(GET_SPACECENTERS)
  const [showDetails, setShowDetails] = useState(false)

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const openDetails = () => {
    setShowDetails(elm => !elm)
  }

  return (
    <div className="planets-container">
      <h1>Spacious</h1>
      <Cards>
        {data?.spaceCenters?.nodes?.map(spaceCenter => 
          <Card 
            onClick={openDetails} 
            name={spaceCenter.name}
            numberOfFlights={<FlightsData spaceCenterId={spaceCenter.id} />}
          />)}
      </Cards>

      <Details 
        show={showDetails} 
        hide={() => setShowDetails(false)} 
        name="Wolf Valleys Space Center"
        description="Wolf Valleys Space Center is the place to be if 
        you like everything related to planets. 
        I know it's a bit meta, but come see by yourself"
        numberOfFlights="1596"
        departureName="Planet Alpha"
        date="15/10/2022 - 04:58pm"
      />
    </div>
  )
}

// Wolf Valleys Space Center


// 1596

// Planet Alpha

// 15/10/2022 - 04:58pm