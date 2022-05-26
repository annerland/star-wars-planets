import LoaderStyle from "./style"
import PropTypes from 'prop-types'

const Loader = (props) => {
  return (
    <LoaderStyle style={{ width: props.width }} />
  )
}

export default Loader

Loader.propTypes = {
  width: PropTypes.string
}
