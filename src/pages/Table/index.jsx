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
  Button,
  Dialog,
  TextField,
  CircularProgress,
} from '@material-ui/core'
import { Skeleton, Pagination } from '@material-ui/lab'

import SpellcheckIcon from '@material-ui/icons/Spellcheck'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
import AddIcon from '@material-ui/icons/Add'

import * as mockApi from '../../mockApi'

import style from './style'
import PageContainer from '../../components/PageContainer'

const TableData = ({ classes, history, location }) => {
  const paramsFromLocation = qs.parse(location.search)

  const { page, pagination } = {
    page: paramsFromLocation.page ? Number(paramsFromLocation.page) : 1,
    pagination: paramsFromLocation.pagination
      ? Number(paramsFromLocation.pagination)
      : 5,
  }

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    page,
    totalPages: 1,
    items: [],
  })
  const [openDialog, setOpenDialog] = useState(false)
  const [addingNewUser, setAddingNewUser] = useState(false)
  const [errorNewUser, setErrorNewUser] = useState('')
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    position: '',
  })

  useEffect(() => {
    if (errorNewUser) setErrorNewUser('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newUserData])

  const skeleton = new Array(pagination).fill(true).map((item, i) => ({
    id: i,
    name: <Skeleton width={`${Math.floor(Math.random() * 51 + 50)}%`} />,
    email: <Skeleton width={`${Math.floor(Math.random() * 51 + 50)}%`} />,
    position: <Skeleton width={`${Math.floor(Math.random() * 51 + 50)}%`} />,
  }))

  const getList = () => {
    setLoading(true)
    mockApi
      .getList({
        page,
        pagination,
      })
      .then((res) => setData(res))
      .catch((e) => {}) // this mockApi cannot be error
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pagination])

  useEffect(() => {
    if (!openDialog) {
      setNewUserData({
        name: '',
        email: '',
        position: '',
      })
    }
  }, [openDialog])

  const onPageChange = (newPage) => {
    history.push({
      pathname: location.pathname,
      search: location.search.replace(/page=\d*/, '').concat('page=', newPage),
    })
  }

  const addNewUser = () => {
    setAddingNewUser(true)
    mockApi
      .addUser(newUserData)
      .then(() => {
        setOpenDialog(false)
        getList()
      })
      .catch((e) => setErrorNewUser(e))
      .finally(() => setAddingNewUser(false))
  }

  return (
    <PageContainer>
      <TableContainer
        className={classes.tablecontainer_container}
        component={Paper}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>
                <SpellcheckIcon size="small" color="action" />
                <span>Name</span>
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                <AlternateEmailIcon size="small" color="action" />
                <span>Email</span>
              </TableCell>
              <TableCell className={classes.tableHead} align="right">
                <AccessibilityNewIcon size="small" color="action" />
                <span>Position</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(loading ? skeleton : data.items).map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.position}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <Button
                startIcon={<AddIcon />}
                onClick={() => setOpenDialog(true)}
              >
                New
              </Button>
            </TableRow>
          </TableBody>
        </Table>
        <Pagination
          count={data.totalPages}
          page={page}
          onChange={(_, p) => onPageChange(p)}
        />
      </TableContainer>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div className={classes.DialogContent}>
          <div>{errorNewUser}</div>
          <TextField
            placeholder="Name"
            onChange={(e) =>
              setNewUserData((u) => ({ ...u, name: e.target.value }))
            }
          />
          <TextField
            placeholder="Email"
            onChange={(e) =>
              setNewUserData((u) => ({ ...u, email: e.target.value }))
            }
          />
          <TextField
            placeholder="Position"
            onChange={(e) =>
              setNewUserData((u) => ({ ...u, position: e.target.value }))
            }
          />
          <Button
            variant="contained"
            onClick={addNewUser}
            startIcon={addingNewUser ? <CircularProgress size={24} /> : ''}
          >
            Add
          </Button>
        </div>
      </Dialog>
    </PageContainer>
  )
}

export default withRouter(withStyles(style)(TableData))
