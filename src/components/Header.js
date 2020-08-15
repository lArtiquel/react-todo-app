import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

const Header = ({ leftContent, rightContent }) => {
  return (
    <Box display="flex" mb={2} boxShadow={8}>
      {leftContent && (
        <Box display="flex" flexGrow={1}>
          {leftContent}
        </Box>
      )}
      {rightContent && (
        <Box display="flex" flexDirection="column" justifyContent="center">
          {rightContent}
        </Box>
      )}
    </Box>
  )
}

Header.propTypes = {
  leftContent: PropTypes.any,
  rightContent: PropTypes.any
}

export default Header
