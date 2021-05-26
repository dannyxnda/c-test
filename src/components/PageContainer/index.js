import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, withStyles } from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import LooksOneIcon from '@material-ui/icons/LooksOne'
import ListAltIcon from '@material-ui/icons/ListAlt'

import style from './style'

const PageContainer = ({ classes, children }) => {
  return (
    <div className={classes.PageContainer}>
      <div className={classes.header}>
        <Link to="/">
          <HomeIcon fontSize="large" color="action" />
        </Link>
        <Link to="/count">
          <LooksOneIcon fontSize="large" color="action" />
        </Link>
        <Link to="/table">
          <ListAltIcon fontSize="large" color="action" />
        </Link>
      </div>
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
