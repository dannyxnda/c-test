import React from 'react'
import PropTypes from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

import style from './style'

const PageContainer = ({ classes, children }) => {
  return (
    <div className={classes.PageContainer}>
      <Card className={classes.PageCard}>{children}</Card>
    </div>
  )
}

PageContainer.defaultProps = {}

PageContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
}

export default withStyles(style)(PageContainer)
