import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

const Header = ({ leftContent, rightContent }) => {
  return (
    <Box display="flex" my={2} boxShadow={8}>
      <Box display="flex" flexGrow={1} m={2}>
        {leftContent}
      </Box>
      <Box width={48} height={48} m={2}>
        {rightContent}
      </Box>
    </Box>
  )
}

Header.propTypes = {
  leftContent: PropTypes.any,
  rightContent: PropTypes.any
}

export default Header
