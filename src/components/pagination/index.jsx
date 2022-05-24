import React, { useState, useEffect } from 'react'
import Classnames from 'classnames'
import Right from '../../assets/right.svg'
import Left from '../../assets/left.svg'

import { PaginationStyle } from './style'

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
        data.push({ page: i, class: [i === props.current ? 'active' : ''] })
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
      <div className='pagination'>
        <img src={Left} onClick={handleLeft} />
        {pages.map((elm, i) =>
          <div onClick={() => handleAction(elm)} key={i} className={Classnames('item', elm.class)}>
            {elm.page}
          </div>
        )}
        <img src={Right} onClick={handleRight} />
      </div>
    </PaginationStyle>
  )
}

export default Pagination
