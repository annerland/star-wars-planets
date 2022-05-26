import { useState } from "react"
import Card from "../../components/card"
import Details from "../../components/details"
import { GET_SPACECENTERS } from "./graphql"
import { NumberOfFlights } from "../../components/numberOfFlights"
import { useQuery } from "@apollo/client"
import { Cards } from "./style"
import Pagination from "../../components/pagination"
import PlanetAssets from "../../constants"

const PAGE_SIZE = 12

export default function Planets() {
  const [page, setPage] = useState(0)
  const { loading, error, data } = useQuery(GET_SPACECENTERS, {
    notifyOnNetworkStatusChange: true,
    variables: { page: page * PAGE_SIZE, pageSize: PAGE_SIZE }
  })
  const [showDetails, setShowDetails] = useState(false)
  const [selected, setSelected] = useState(null)

  if (loading) return 'LOADING...'
  if (error) return `Error! ${error.message}`

  const openDetails = (selectedElm) => {
    setSelected(selectedElm)
    setShowDetails(true)
  }

  const closeDetails = () => {
    setSelected(null)
    setShowDetails(false)
  }

  const getPlanetImg = (id) => {
    return PlanetAssets[id%(PlanetAssets.length - 1)]
  }

  return (
    <div className="planets-container">
      <h1>Spacious</h1>
      <Cards>
        {data?.spaceCenters?.nodes?.map((spaceCenter, i = 0) => 
          <Card
            key={spaceCenter.id}
            planet={getPlanetImg(spaceCenter.id)}
            onClick={() => openDetails(spaceCenter)} 
            name={spaceCenter.name}
            numberOfFlights={<NumberOfFlights spaceCenterId={spaceCenter.id} />}
          />
        )}
      </Cards>

      <Details 
        show={showDetails} 
        hide={() => closeDetails(false)} 
        name={selected?.name}
        description={selected?.description}
        numberOfFlights={<NumberOfFlights spaceCenterId={selected?.id} />}
        departureName="Planet Alpha"
        date="15/10/2022 - 04:58pm"
        />

      <Pagination
        total={10}
        current={page}
        onChange={setPage}
      />
    </div>
  )
}
