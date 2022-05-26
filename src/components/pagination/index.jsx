import React, { useState, useEffect } from 'react'
import { PaginationStyle, PaginationItem, PaginationIcon } from './style'
import Right from '../../assets/right.svg'
import Left from '../../assets/left.svg'
import PropTypes from 'prop-types'

const Pagination = (props) => {
  const [pages, setPages] = useState([])

  function getPagesData () {
    const data = []

    if (props.current >= 3 && props.current <= props.total - 3) {
      data.push({ page: 1 })
      data.push({ page: props.total })

      return data
    } else {
      for (let i = 1; i <= props.total; i++) {
        data.push({ page: i })
      }

      return data
    }
  }

  useEffect(() => {
    setPages(getPagesData())
  }, [props.current, props.total])

  const handleAction = (elm) => {
    props.onChange(elm.page)
    console.log(elm, 'elm')
  }

  const handleLeft = () => {
    if (props.current > 1) {
      props.onChange(props.current - 1)
    }
  }

  const handleRight = () => {
    if (props.current < props.total) {
      props.onChange(props.current + 1)
    }
  }

  if (props.total < 2) return null

  return (
    <PaginationStyle>
        <PaginationIcon src={Left} onClick={handleLeft} />
        {pages.map((elm, i) =>
          <PaginationItem onClick={() => handleAction(elm)} key={i}>
            {elm.page}
          </PaginationItem>
        )}
        <PaginationIcon src={Right} onClick={handleRight} />
    </PaginationStyle>
  )
}

export default Pagination

Pagination.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  onChange: PropTypes.func
}

Pagination.defaultProps = {
  total: 1,
  current: 1
}
