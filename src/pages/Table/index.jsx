import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles,
  Paper,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import * as mockApi from '../../mockApi'

import style from './style'
import PageContainer from '../../components/PageContainer'

const TableData = ({ classes, history, location }) => {
  const { page, pagination } = qs.parse(location.search)

  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const skeleton = new Array(Number(pagination) || 5)
    .fill(true)
    .map((item, i) => ({
      id: i,
      name: <Skeleton width={`${Math.floor(Math.random() * 51 + 50)}%`} />,
      email: <Skeleton width={`${Math.floor(Math.random() * 51 + 50)}%`} />,
      position: <Skeleton width={`${Math.floor(Math.random() * 51 + 50)}%`} />,
    }))

  useEffect(() => {
    setLoading(true)
    mockApi
      .getList({
        page: page ? Number(page) : 1,
        pagination: pagination ? Number(pagination) : 5,
      })
      .then((res) => setList(res))
      .catch((e) => {})
      .finally(() => setLoading(false))
  }, [page, pagination])

  return (
    <PageContainer>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(loading ? skeleton : list).map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageContainer>
  )
}

export default withRouter(withStyles(style)(TableData))
