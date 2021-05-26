const style = (theme) => ({
  tablecontainer_container: {
    width: 'clamp(500px, 80%, 1000px)',
    margin: 'auto',
  },
  tableHead: {
    '& > svg': {
      transform: 'translateY(4px)',
    },
    '& > span': {
      color: '#757575',
      fontWeight: 'bold',
      fontSize: theme.spacing(2),
      marginLeft: theme.spacing(1),
    },
  },
  DialogContent: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    '& > div:first-child': {
      color: 'red',
      width: 400,
    },
  },
})

export default style
